// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import path from "path";
var Entry = defineDocumentType(() => ({
  name: "Entry",
  filePathPattern: "entries/**/*.{md,mdx}",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    tags: { type: "list", of: { type: "string" }, default: [] },
    entryType: {
      type: "enum",
      options: ["note", "journal", "document"],
      required: true,
      default: "document"
    },
    draft: { type: "boolean" },
    summary: { type: "string" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => path.basename(doc._raw.sourceFilePath, path.extname(doc._raw.sourceFilePath))
    },
    path: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Entry],
  disableImportAliasWarning: true
});
export {
  Entry,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-MNIIOGGJ.mjs.map