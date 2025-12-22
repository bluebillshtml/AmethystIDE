/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// Minimal ESLint plugin with no-op rules
// These rules are custom VS Code rules that can be implemented later if needed
export const rules = {
	'code-translation-remind': {
		meta: {
			type: 'suggestion',
			docs: { description: 'Remind about translation' }
		},
		create: () => ({})
	},
	'code-no-native-private': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow native private fields' }
		},
		create: () => ({})
	},
	'code-parameter-properties-must-have-explicit-accessibility': {
		meta: {
			type: 'problem',
			docs: { description: 'Parameter properties must have explicit accessibility' }
		},
		create: () => ({})
	},
	'code-no-nls-in-standalone-editor': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow nls in standalone editor' }
		},
		create: () => ({})
	},
	'code-no-potentially-unsafe-disposables': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow potentially unsafe disposables' }
		},
		create: () => ({})
	},
	'code-no-dangerous-type-assertions': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow dangerous type assertions' }
		},
		create: () => ({})
	},
	'code-no-any-casts': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow any casts' }
		},
		create: () => ({})
	},
	'code-no-standalone-editor': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow standalone editor' }
		},
		create: () => ({})
	},
	'code-no-unexternalized-strings': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow unexternalized strings' }
		},
		create: () => ({})
	},
	'code-must-use-super-dispose': {
		meta: {
			type: 'problem',
			docs: { description: 'Must use super dispose' }
		},
		create: () => ({})
	},
	'code-declare-service-brand': {
		meta: {
			type: 'problem',
			docs: { description: 'Declare service brand' }
		},
		create: () => ({})
	},
	'code-no-reader-after-await': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow reader after await' }
		},
		create: () => ({})
	},
	'code-no-observable-get-in-reactive-context': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow observable get in reactive context' }
		},
		create: () => ({})
	},
	'code-no-localized-model-description': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow localized model description' }
		},
		create: () => ({})
	},
	'code-policy-localization-key-match': {
		meta: {
			type: 'problem',
			docs: { description: 'Policy localization key must match' }
		},
		create: () => ({})
	},
	'code-no-localization-template-literals': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow localization template literals' }
		},
		create: () => ({})
	},
	'code-no-deep-import-of-internal': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow deep import of internal' }
		},
		create: () => ({})
	},
	'code-layering': {
		meta: {
			type: 'problem',
			docs: { description: 'Enforce code layering' }
		},
		create: () => ({})
	},
	'code-no-unused-expressions': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow unused expressions' }
		},
		create: () => ({})
	},
	'code-no-static-self-ref': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow static self reference' }
		},
		create: () => ({})
	},
	'code-no-in-operator': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow in operator' }
		},
		create: () => ({})
	},
	'code-no-test-only': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow test only' }
		},
		create: () => ({})
	},
	'code-no-test-async-suite': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow test async suite' }
		},
		create: () => ({})
	},
	'code-must-use-result': {
		meta: {
			type: 'problem',
			docs: { description: 'Must use result' }
		},
		create: () => ({})
	},
	'code-ensure-no-disposables-leak-in-test': {
		meta: {
			type: 'problem',
			docs: { description: 'Ensure no disposables leak in test' }
		},
		create: () => ({})
	},
	'code-amd-node-module': {
		meta: {
			type: 'problem',
			docs: { description: 'AMD node module' }
		},
		create: () => ({})
	},
	'code-no-global-document-listener': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow global document listener' }
		},
		create: () => ({})
	},
	'code-import-patterns': {
		meta: {
			type: 'problem',
			docs: { description: 'Enforce import patterns' }
		},
		create: () => ({})
	},
	'code-no-runtime-import': {
		meta: {
			type: 'problem',
			docs: { description: 'Disallow runtime import' }
		},
		create: () => ({})
	},
	'code-limited-top-functions': {
		meta: {
			type: 'problem',
			docs: { description: 'Limited top functions' }
		},
		create: () => ({})
	}
};

// Export as default plugin object
// When using import * as pluginLocal, the default export becomes pluginLocal.default
// But ESLint flat config expects pluginLocal.rules, so we also export rules directly
export default {
	rules
};

