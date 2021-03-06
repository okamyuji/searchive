// MIT © 2017 azu
import { SearchiveSearcher, SearchiveDocument } from "searchive-client";
import { createIndex } from "searchive-create-index";
import * as fs from "fs";

export function writeIndex(globList: string[], outputPath: string): Promise<void> {
    return createIndex(globList).then(index => {
        fs.writeFileSync(outputPath, JSON.stringify(index), "utf-8");
    });
}

export function searchIndex(text: string, indexPath: string): string[] {
    const index = JSON.parse(fs.readFileSync(indexPath, "utf-8"));
    const searcher = new SearchiveSearcher(index);
    return searcher
        .search(text)
        .sort((a: SearchiveDocument, b: SearchiveDocument) => {
            return a.pageNumber - b.pageNumber;
        })
        .map((doc: SearchiveDocument) => {
            return `Title:${doc.title || "No title"}
Path: ${doc.filePath}
Page: ${doc.pageNumber}`;
        });
}
