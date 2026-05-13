import { useState } from "react";

export default function IdeaInput({ onSubmit }) {
  const [text, setText] = useState("");
  const [hint, setHint] = useState(null);

  const submit = () => {
    if (!text.trim()) {
      setHint({
        type: "warn",
        message: "Önce ne tasarlamak istediğini birkaç kelimeyle yaz.",
      });
      return;
    }
    const result = onSubmit(text);
    if (result?.reason) {
      setHint({ type: "ok", message: "İpucu: " + result.reason });
    } else {
      setHint({
        type: "warn",
        message:
          "Açıklamadan stil veya renk çıkaramadım. Renk adı (kırmızı, lacivert, kan rengi, pastel pembe...) ya da stil (minimal, lüks, retro, neon, kurumsal, eğlenceli) ekleyebilirsin. Yine de yeni paletler ürettim.",
      });
    }
  };

  return (
    <section className="panel idea">
      <h2 className="panel__title">Ne tasarlamak istiyorsun?</h2>
      <textarea
        className="idea__input"
        placeholder="Örn: Kan rengi kırmızı bir kuyumcu logosu · Lacivert kurumsal afiş · Pastel pembe sosyal medya postu · Koyu yeşil doğal kozmetik kimliği"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
      />
      <div className="idea__footer">
        <button className="btn btn--primary" onClick={submit}>
          Bana Fikir Ver
        </button>
        {hint && (
          <p className={`idea__hint idea__hint--${hint.type}`}>{hint.message}</p>
        )}
      </div>
    </section>
  );
}
