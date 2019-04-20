import * as vscode from 'vscode';
/**
 * imgItem / 图片List类
 */
export class imgItem implements vscode.QuickPickItem {

	label: string;
	description: string;
	type: number;
	path?: string|undefined;

	constructor(label: string, description: string,type:number,path?:string|undefined) {
        this.label = label;
        this.description = description;
				this.type = type;
				this.path = path;
    }
}