import { BundleSource } from 'fuse-box/dist/commonjs/BundleSource'
import { compile } from 'google-closure-compiler-js'

/**
 * @export
 * @class ClosureCompilerPluginClass
 */
export class ClosureCompilerPluginClass {
	/**
	 * @type {any}
	 * @memberOf ClosureCompilerPluginClass
	 */
	public options: any

	constructor(options: any) {
		this.options = options || {}
	}

	public postBundle(context) {
		const concat = context.source.getResult()
		const source = concat.content.toString()
		const sourceMap = concat.sourceMap
		const newSource = new BundleSource(context)
		context.source = newSource
		const newConcat = context.source.getResult()
		// if ("sourceMapConfig" in context) {
		// 	if (context.sourceMapConfig.bundleReference) {
		// 		mainOptions.inSourceMap = JSON.parse(sourceMap)
		// 		mainOptions.outSourceMap = context.sourceMapConfig.bundleReference
		// 	}
		// }

		// const result = UglifyJs.minify(source, {
		// 	...this.options,
		// 	...mainOptions
		// })
		const result = compile({jsCode: [{src: source}]})

		newConcat.add(null, result.compiledCode, result.map || sourceMap)
	}
}

const ClosureCompilerPlugin = (options: any) => {
	return new ClosureCompilerPluginClass(options)
}

export default ClosureCompilerPlugin