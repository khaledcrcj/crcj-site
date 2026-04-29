import { defineField, defineType } from "sanity";
import { translations } from "../../lib/translations";

const copyFields = [
  ["navAbout", "Navigation: About"],
  ["navAreas", "Navigation: What We Do"],
  ["navPublications", "Navigation: Publications"],
  ["navPrograms", "Navigation: Education & Training"],
  ["navNewsletter", "Navigation: Newsletter"],
  ["navContact", "Navigation: Contact"],
  ["heroLabel", "Hero: Small Label"],
  ["heroTop", "Hero: Location Line"],
  ["heroTitle", "Hero: Main Title"],
  ["heroSubtitle", "Hero: Subtitle"],
  ["heroText", "Hero: Paragraph"],
  ["heroBtn1", "Hero: First Button"],
  ["heroBtn2", "Hero: Second Button"],
  ["aboutLabel", "About: Small Label"],
  ["aboutTitle", "About: Title"],
  ["aboutText", "About: Paragraph"],
  ["h1", "About Card 1: Title"],
  ["h1t", "About Card 1: Text"],
  ["h2", "About Card 2: Title"],
  ["h2t", "About Card 2: Text"],
  ["h3", "About Card 3: Title"],
  ["h3t", "About Card 3: Text"],
  ["h4", "About Card 4: Title"],
  ["h4t", "About Card 4: Text"],
  ["areasLabel", "Focus Areas: Small Label"],
  ["areasTitle", "Focus Areas: Title"],
  ["areasIntro", "Focus Areas: Intro"],
  ["fa1", "Focus Area 1: Title"],
  ["fa1t", "Focus Area 1: Text"],
  ["fa2", "Focus Area 2: Title"],
  ["fa2t", "Focus Area 2: Text"],
  ["fa3", "Focus Area 3: Title"],
  ["fa3t", "Focus Area 3: Text"],
  ["fa4", "Focus Area 4: Title"],
  ["fa4t", "Focus Area 4: Text"],
  ["fa5", "Focus Area 5: Title"],
  ["fa5t", "Focus Area 5: Text"],
  ["fa6", "Focus Area 6: Title"],
  ["fa6t", "Focus Area 6: Text"],
  ["pubLabel", "Publications: Small Label"],
  ["pubTitle", "Publications: Title"],
  ["pubIntro", "Publications: Intro"],
  ["pub1", "Publication Card 1: Title"],
  ["pub1t", "Publication Card 1: Text"],
  ["pub2", "Publication Card 2: Title"],
  ["pub2t", "Publication Card 2: Text"],
  ["pub3", "Publication Card 3: Text"],
  ["pub3t", "Publication Card 3: Text"],
  ["progLabel", "Programs: Small Label"],
  ["progTitle", "Programs: Title"],
  ["progIntro", "Programs: Intro"],
  ["p1", "Program Card 1: Title"],
  ["p1t", "Program Card 1: Text"],
  ["p2", "Program Card 2: Title"],
  ["p2t", "Program Card 2: Text"],
  ["p3", "Program Card 3: Title"],
  ["p3t", "Program Card 3: Text"],
  ["progDisc", "Programs: Disclaimer"],
  ["newsTitle", "Newsletter: Title"],
  ["newsText", "Newsletter: Text"],
  ["newsPlaceholder", "Newsletter: Email Placeholder"],
  ["newsBtn", "Newsletter: Button"],
  ["talkTitle", "Social Section: Title"],
  ["talkText", "Social Section: Text"],
  ["contactLabel", "Contact: Small Label"],
  ["contactTitle", "Contact: Title"],
  ["contactText", "Contact: Text"],
  ["contactEmail", "Contact: Email"],
  ["contactLocation", "Contact: Location"],
  ["footer1", "Footer: Copyright"],
  ["footer2", "Footer: Description"],
  ["langEN", "Language Button: English"],
  ["langAR", "Language Button: Arabic"],
] as const;

function languageFields(languageName: string) {
  return defineField({
    name: languageName,
    title: languageName === "en" ? "English Website Text" : "Arabic Website Text",
    type: "object",
    fields: copyFields.map(([name, title]) => {
      const isLongText =
        name.endsWith("Text") ||
        name.endsWith("Intro") ||
        name.endsWith("Disc") ||
        name.endsWith("t");

      return defineField({
        name,
        title,
        type: isLongText ? "text" : "string",
        ...(isLongText ? { rows: 3 } : {}),
      });
    }),
  });
}

export const siteContent = defineType({
  name: "siteContent",
  title: "Website Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal Name",
      type: "string",
      initialValue: "Main Website Content",
      readOnly: true,
    }),
    languageFields("en"),
    languageFields("ar"),
  ],
  initialValue: {
    title: "Main Website Content",
    en: translations.en,
    ar: translations.ar,
  },
  preview: {
    prepare() {
      return {
        title: "Website Content",
        subtitle: "Edit the text shown on crcj.org",
      };
    },
  },
});
