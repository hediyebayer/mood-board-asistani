import { useEffect, useMemo, useState } from "react";
import IdeaInput from "./components/IdeaInput";
import ProjectTypeSelector from "./components/ProjectTypeSelector";
import StyleSelector from "./components/StyleSelector";
import ResultBoard from "./components/ResultBoard";
import SavedBoards from "./components/SavedBoards";
import Toast from "./components/Toast";
import ThemeToggle from "./components/ThemeToggle";
import Logo from "./components/Logo";
import { PROJECT_TYPES, STYLES } from "./data/presets";
import { generatePalette } from "./utils/palette";
import { buildFontOptions } from "./utils/fonts";
import { readFromUrl, writeToUrl, buildShareUrl } from "./utils/share";
import { analyzeIdea } from "./utils/suggest";
import { useTheme } from "./hooks/useTheme";
import { useToast } from "./hooks/useToast";

const STORAGE_KEY = "mood-boards";
const PALETTE_COUNT = 6;
const FONT_COUNT = 6;

const buildPaletteOptions = (styleId, seed, paramsOverride) => {
  const params = paramsOverride
    ? { ...STYLES[styleId].params, ...paramsOverride }
    : STYLES[styleId].params;
  const fresh = Array.from({ length: seed ? PALETTE_COUNT - 1 : PALETTE_COUNT }, () =>
    generatePalette(params)
  );
  return seed ? [seed, ...fresh] : fresh;
};

export default function App() {
  const fromUrl = readFromUrl();
  const initStyle = fromUrl?.styleId || "minimal";

  const [projectType, setProjectType] = useState(fromUrl?.projectType || "logo");
  const [styleId, setStyleId] = useState(initStyle);
  const [paletteOptions, setPaletteOptions] = useState(() =>
    buildPaletteOptions(initStyle, fromUrl?.palette)
  );
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [fontOptions, setFontOptions] = useState(() =>
    buildFontOptions(initStyle, FONT_COUNT, fromUrl?.fonts)
  );
  const [fontIdx, setFontIdx] = useState(0);
  const [colorHint, setColorHint] = useState(null);
  const [saved, setSaved] = useState([]);
  const [theme, toggleTheme] = useTheme();
  const [toast, showToast] = useToast();

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setSaved(JSON.parse(raw));
      } catch {}
    }
  }, []);

  useEffect(() => {
    writeToUrl({
      projectType,
      styleId,
      palette: paletteOptions[paletteIdx],
      fonts: fontOptions[fontIdx],
    });
  }, [projectType, styleId, paletteOptions, paletteIdx, fontOptions, fontIdx]);

  const board = useMemo(
    () => ({
      projectType,
      projectLabel: PROJECT_TYPES.find((p) => p.id === projectType)?.label,
      styleId,
      styleLabel: STYLES[styleId].label,
      palette: paletteOptions[paletteIdx],
      fonts: fontOptions[fontIdx],
    }),
    [projectType, styleId, paletteOptions, paletteIdx, fontOptions, fontIdx]
  );

  const changeStyle = (id) => {
    setStyleId(id);
    setPaletteOptions(buildPaletteOptions(id, null, colorHint));
    setPaletteIdx(0);
    setFontOptions(buildFontOptions(id, FONT_COUNT));
    setFontIdx(0);
  };

  const regeneratePalettes = () => {
    setPaletteOptions(buildPaletteOptions(styleId, null, colorHint));
    setPaletteIdx(0);
    showToast("Yeni paletler üretildi");
  };

  const regenerateFonts = () => {
    setFontOptions(buildFontOptions(styleId, FONT_COUNT));
    setFontIdx(0);
    showToast("Yeni fontlar üretildi");
  };

  const handleIdea = (text) => {
    const result = analyzeIdea(text);
    if (!result) {
      setColorHint(null);
      setPaletteOptions(buildPaletteOptions(styleId, null, null));
      setPaletteIdx(0);
      showToast("Yeni paletler üretildi");
      return null;
    }
    if (result.projectType) setProjectType(result.projectType);
    const nextStyle = result.styleId || styleId;
    if (result.styleId && result.styleId !== styleId) {
      setStyleId(result.styleId);
      setFontOptions(buildFontOptions(result.styleId, FONT_COUNT));
      setFontIdx(0);
    }
    const nextColorHint = result.colorParams || null;
    setColorHint(nextColorHint);
    setPaletteOptions(buildPaletteOptions(nextStyle, null, nextColorHint));
    setPaletteIdx(0);
    return result;
  };

  const handleSave = () => {
    const item = { ...board, id: Date.now() };
    const next = [item, ...saved];
    setSaved(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    showToast("Mood board kaydedildi");
  };

  const handleDelete = (id) => {
    const next = saved.filter((b) => b.id !== id);
    setSaved(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    showToast("Silindi");
  };

  const handleLoad = (b) => {
    setProjectType(b.projectType);
    setStyleId(b.styleId);
    setColorHint(null);
    setPaletteOptions(buildPaletteOptions(b.styleId, b.palette));
    setPaletteIdx(0);
    setFontOptions(buildFontOptions(b.styleId, FONT_COUNT, b.fonts));
    setFontIdx(0);
    showToast("Mood board yüklendi");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    const url = buildShareUrl({
      projectType,
      styleId,
      palette: paletteOptions[paletteIdx],
      fonts: fontOptions[fontIdx],
    });
    try {
      await navigator.clipboard.writeText(url);
      showToast("Link panoya kopyalandı");
    } catch {
      showToast("Link kopyalanamadı");
    }
  };

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <Logo size={44} />
          <div>
            <h1>Mood Board Asistanı</h1>
            <p>Açıklamanı yaz, stili seç, paletini ve fontunu kendin belirle.</p>
          </div>
        </div>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main className="app__main">
        <IdeaInput onSubmit={handleIdea} />
        <ProjectTypeSelector value={projectType} onChange={setProjectType} />
        <StyleSelector value={styleId} onChange={changeStyle} />
        <ResultBoard
          board={board}
          paletteOptions={paletteOptions}
          paletteIdx={paletteIdx}
          onPaletteSelect={setPaletteIdx}
          fontOptions={fontOptions}
          fontIdx={fontIdx}
          onFontSelect={setFontIdx}
          onRegeneratePalettes={regeneratePalettes}
          onRegenerateFonts={regenerateFonts}
          onSave={handleSave}
          onShare={handleShare}
          onToast={showToast}
        />
        <SavedBoards items={saved} onDelete={handleDelete} onLoad={handleLoad} />
      </main>

      <footer className="app__footer">
        <small>© Mood Board Asistanı</small>
      </footer>
      <Toast toast={toast} />
    </div>
  );
}
