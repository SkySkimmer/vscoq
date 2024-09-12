import {
    TextEditor,
    commands,
    workspace
} from 'vscode';

import {
    RequestType,
    VersionedTextDocumentIdentifier,
} from 'vscode-languageclient/node';

import GoalPanel from './panels/GoalPanel';

import Client from './client';
import { makeVersionedDocumentId } from './utilities/utils';

export const sendInterpretToPoint = (editor: TextEditor, client: Client) => {
    const textDocument = makeVersionedDocumentId(editor);
    const position = editor.selection.active;
    const mode = workspace.getConfiguration("vscoq.proof").pointInterpretationMode;
    client.sendNotification("vscoq/interpretToPoint", {textDocument: textDocument, position: position, to_next_point: mode === 1 });
};

export const sendInterpretToEnd = (editor: TextEditor,  client: Client) => {
    const textDocument = makeVersionedDocumentId(editor);
    client.sendNotification("vscoq/interpretToEnd", {textDocument: textDocument});
};

export const sendStepForward = (editor: TextEditor,  client: Client) => {
    const textDocument = makeVersionedDocumentId(editor);
    client.sendNotification("vscoq/stepForward", {textDocument: textDocument, position: null});
};

export const sendStepBackward = (editor: TextEditor,  client: Client) => {
    const textDocument = makeVersionedDocumentId(editor);
    client.sendNotification("vscoq/stepBackward", {textDocument: textDocument, position: null});
};

