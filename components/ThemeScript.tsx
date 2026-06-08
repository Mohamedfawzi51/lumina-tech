import { THEME_STORAGE_KEY } from "@/lib/theme";

export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t!=="light";document.documentElement.classList.toggle("dark",d);document.documentElement.classList.toggle("light",!d);}catch(e){document.documentElement.classList.add("dark");}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
