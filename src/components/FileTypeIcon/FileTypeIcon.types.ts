import type { SVGProps } from "react";

export type FileTypeVariant = "default" | "gray" | "solid";

export type FileTypeFormat =
  // Document
  | "pdf"
  | "doc"
  | "docx"
  | "txt"
  | "csv"
  | "xls"
  | "xlsx"
  | "ppt"
  | "pptx"
  // Image
  | "png"
  | "jpg"
  | "jpeg"
  | "webp"
  | "svg"
  | "gif"
  | "eps"
  | "tiff"
  | "tif"
  | "img"
  // Design
  | "fig"
  | "figma"
  | "ai"
  | "illustrator"
  | "psd"
  | "photoshop"
  | "indd"
  | "indesign"
  | "aep"
  | "aftereffects"
  // Media
  | "mp3"
  | "wav"
  | "mp4"
  | "avi"
  | "mkv"
  | "mpeg"
  // Development
  | "html"
  | "css"
  | "js"
  | "json"
  | "java"
  | "sql"
  | "xml"
  | "rss"
  | "exe"
  | "dmg"
  // Archive
  | "zip"
  | "rar"
  // Simple
  | "folder"
  | "empty"
  | "image"
  | "video"
  | "audio"
  | "document"
  | "spreadsheet"
  | "code"
  | (string & {});

export interface FileTypeIconProps extends Omit<SVGProps<SVGSVGElement>, "type"> {
  /**
   * The file format/extension or full Figma file type name
   * (e.g. "pdf", "docx", "png", "zip", "folder", "Document / PDF")
   */
  format: FileTypeFormat;
  /**
   * Visual style variant
   * @default "default"
   */
  variant?: FileTypeVariant;
  /**
   * Icon dimension (rendered 1:1 aspect ratio)
   * @default 40
   */
  size?: number | string;
  className?: string;
}
