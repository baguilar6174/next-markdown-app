import { readFileSync, readdirSync, statSync } from "fs";
import matter from "gray-matter";
import path from "path";

/**
 * Gets files from nested directories and subdirectories.
 * @param dirPath Directory where the file search will be performed.
 * @param arrayOfFiles Parameter used in recursion.
 * @returns {string[]} list of files obtained.
 * 
 * @example
 * getAllFiles('content');
 * * // returns [ 'content/example-1.md', 'content/example-2.md' ].
 */
const getAllFiles = function (dirPath: string, arrayOfFiles?: string[]): string[] {
	const files = readdirSync(dirPath);
	arrayOfFiles = arrayOfFiles || [];
	files.forEach(function (file: string): void {
		if (statSync(dirPath + '/' + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
		} else {
			arrayOfFiles && arrayOfFiles.push(path.join(dirPath, '/', file));
		}
	});
	return arrayOfFiles;
};

/**
 * Read a list of files from a directory and get their contents
 * @param folder Directory where the file search will be performed
 * @returns T[]
 */
export const getFromContent = <T>(folder: string): T[] => {
	const files = getAllFiles(folder);
	const contentFiles = files.map((file): T => {
		const fileContents = readFileSync(file, 'utf-8');
		const matterResult = matter(fileContents);
		return { ...matterResult.data, content: matterResult.content } as T;
	});
	return contentFiles;
};