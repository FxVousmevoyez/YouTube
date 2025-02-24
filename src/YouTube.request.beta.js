import ENVs from "./ENV/ENV.mjs";
import URIs from "./URI/URI.mjs";

import Database from "./database/index.mjs";
import setENV from "./function/setENV.mjs";
import setCache from "./function/setCache.mjs";

import { TextEncoder , TextDecoder } from "./text-encoding/index.js";
import { WireType, UnknownFieldHandler, reflectionMergePartial, MESSAGE_TYPE, MessageType, BinaryReader, isJsonObject, typeofJsonValue, jsonWriteOptions } from "../node_modules/@protobuf-ts/runtime/build/es2015/index.js";

const $ = new ENVs("🍿 DualSubs: ▶ YouTube v1.3.4(3) request.beta");
const URI = new URIs();

// 构造回复数据
let $response = undefined;

/***************** Processing *****************/
// 解构URL
const URL = URI.parse($request.url);
$.log(`⚠ ${$.name}`, `URL: ${JSON.stringify(URL)}`, "");
// 获取连接参数
const METHOD = $request.method, HOST = URL.host, PATH = URL.path, PATHs = URL.paths;
$.log(`⚠ ${$.name}`, `METHOD: ${METHOD}`, "");
// 解析格式
const FORMAT = ($request.headers?.["Content-Type"] ?? $request.headers?.["content-type"])?.split(";")?.[0];
$.log(`⚠ ${$.name}, FORMAT: ${FORMAT}`, "");
(async () => {
	// 读取设置
	const { Settings, Caches, Configs } = setENV($, "DualSubs", "YouTube", Database);
	$.log(`⚠ ${$.name}`, `Settings.Switch: ${Settings?.Switch}`, "");
	switch (Settings.Switch) {
		case true:
		default:
			// 获取字幕类型与语言
			const Type = URL.query?.subtype ?? Settings.Type, Languages = [URL.query?.lang?.toUpperCase?.() ?? Settings.Languages[0], (URL.query?.tlang ?? Caches?.tlang)?.toUpperCase?.() ?? Settings.Languages[1]];
			$.log(`⚠ ${$.name}, Type: ${Type}, Languages: ${Languages}`, "");
			// 创建空数据
			let body = {};
			// 方法判断
			switch (METHOD) {
				case "POST":
				case "PUT":
				case "PATCH":
				case "DELETE":
					// 格式判断
					switch (FORMAT) {
						case undefined: // 视为无body
							break;
						case "application/x-www-form-urlencoded":
						case "text/plain":
						case "text/html":
						default:
							break;
						case "application/x-mpegURL":
						case "application/x-mpegurl":
						case "application/vnd.apple.mpegurl":
						case "audio/mpegurl":
							//body = M3U8.parse($request.body);
							//$.log(`🚧 ${$.name}`, `body: ${JSON.stringify(body)}`, "");
							//$request.body = M3U8.stringify(body);
							break;
						case "text/xml":
						case "text/plist":
						case "application/xml":
						case "application/plist":
						case "application/x-plist":
							//body = XML.parse($request.body);
							//$.log(`🚧 ${$.name}`, `body: ${JSON.stringify(body)}`, "");
							//$request.body = XML.stringify(body);
							break;
						case "text/vtt":
						case "application/vtt":
							//body = VTT.parse($request.body);
							//$.log(`🚧 ${$.name}`, `body: ${JSON.stringify(body)}`, "");
							//$request.body = VTT.stringify(body);
							break;
						case "text/json":
						case "application/json":
							body = JSON.parse($request.body ?? "{}");
							switch (PATH) {
								case "youtubei/v1/player":
									// 找功能
									if (body?.playbackContext) { // 有播放设置
										$.log(`⚠ ${$.name}, playbackContext`, "");
										if (body?.playbackContext.contentPlaybackContext) { // 有播放设置内容
											body.playbackContext.contentPlaybackContext.autoCaptionsDefaultOn = true; // 默认开启自动字幕
										};
									};
									break;
								case "youtubei/v1/browse":
									if (body?.browseId?.startsWith?.("MPLYt_")) $.lodash.set(URL, "query.subtype" , "Translate");
									break;
								};
							$request.body = JSON.stringify(body);
							break;
						case "application/protobuf":
						case "application/x-protobuf":
						case "application/vnd.google.protobuf":
						case "application/grpc":
						case "application/grpc+proto":
						case "application/octet-stream":
							$.log(`🚧 ${$.name}, 调试信息`, `$request: ${JSON.stringify($request, null, 2)}`, "");
							let rawBody = $.isQuanX() ? new Uint8Array($request.bodyBytes ?? []) : $request.body ?? new Uint8Array();
							$.log(`🚧 ${$.name}, 调试信息`, `isBuffer? ${ArrayBuffer.isView(rawBody)}: ${JSON.stringify(rawBody)}`, "");
							switch (FORMAT) {
								case "application/protobuf":
								case "application/x-protobuf":
								case "application/vnd.google.protobuf":
									/******************  initialization start  *******************/
									class Context$Type extends MessageType {
										constructor() {
											super("Context", [
												{ no: 1, name: "client", kind: "message", T: () => Client },
												{ no: 9, name: "adSignalsInfo", kind: "message", T: () => AdSignalsInfo }
											]);
										}
									}
									const Context = new Context$Type();
									class Client$Type extends MessageType {
										constructor() {
											super("Client", [
												{ no: 1, name: "hl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
												{ no: 2, name: "gl", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
												{ no: 12, name: "deviceMake", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 13, name: "deviceModel", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 16, name: "clientName", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
												{ no: 17, name: "clientVersion", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 18, name: "osName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 19, name: "osVersion", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
												{ no: 80, name: "timeZone", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
											]);
										}
									}
									const Client = new Client$Type();
									class AdSignalsInfo$Type extends MessageType {
										constructor() {
											super("AdSignalsInfo", [
												{ no: 1, name: "params", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
											]);
										}
									}
									const AdSignalsInfo = new AdSignalsInfo$Type();
									/******************  initialization finish  *******************/
									switch (PATH) {
										case "youtubei/v1/player":
											/******************  initialization start  *******************/
											// proto/player.request.js
											class Player$Type extends MessageType {
												constructor() {
													super("Player", [
														{ no: 1, name: "context", kind: "message", T: () => Context },
														{ no: 2, name: "videoId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
														{ no: 4, name: "playbackContext", kind: "message", T: () => PlaybackContext }
													]);
												}
											}
											const Player = new Player$Type();
											class PlaybackContext$Type extends MessageType {
												constructor() {
													super("PlaybackContext", [
														{ no: 1, name: "contentPlaybackContext", kind: "message", T: () => ContentPlaybackContext }
													]);
												}
											}
											const PlaybackContext = new PlaybackContext$Type();
											class ContentPlaybackContext$Type extends MessageType {
												constructor() {
													super("ContentPlaybackContext", [
														{ no: 4, name: "id4", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
														{ no: 6, name: "id6", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
														{ no: 8, name: "id8", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ },
														{ no: 9, name: "id9", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
													]);
												}
											}
											const ContentPlaybackContext = new ContentPlaybackContext$Type();
											/******************  initialization finish  *******************/
											body = Player.fromBinary(rawBody);
											$.log(`🚧 ${$.name}, 调试信息`, `data: ${JSON.stringify(body)}`, "");
											// 找功能
											if (body?.playbackContext) { // 有播放设置
												$.log(`⚠ ${$.name}, playbackContext`, "");
												if (body?.playbackContext.contentPlaybackContext) { // 有播放设置内容
													//body.playbackContext.contentPlaybackContext.autoCaptionsDefaultOn = true; // 默认开启自动字幕
													body.playbackContext.contentPlaybackContext.id4 = 1; // 
													body.playbackContext.contentPlaybackContext.id6 = 1; // 
													body.playbackContext.contentPlaybackContext.id8 = 1; // 
													body.playbackContext.contentPlaybackContext.id9 = 1; // 
												};
											};
											$.log(`🚧 ${$.name}, 调试信息`, `data: ${JSON.stringify(body)}`, "");
											rawBody = Player.toBinary(body);
											break;
										case "youtubei/v1/browse":
											/******************  initialization start  *******************/
											// proto/browse.request.js
											class Browse$Type extends MessageType {
												constructor() {
													super("Browse", [
														{ no: 1, name: "context", kind: "message", T: () => Context },
														{ no: 2, name: "browseId", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
													]);
												}
											};
											const Browse = new Browse$Type();
											/******************  initialization finish  *******************/
											body = Browse.fromBinary(rawBody);
											$.log(`🚧 ${$.name}, 调试信息`, `data: ${JSON.stringify(body)}`, "");
											if (body?.browseId?.startsWith?.("MPLYt_")) {
												/*
												if (Settings.Types.includes("Translate")) $.lodash.set(URL, "query.subtype", "Translate");
												else if (Settings.Types.includes("External")) $.lodash.set(URL, "query.subtype", "External");
												*/
												const detectStutus = $.fetch($request);
												//const detectTrack = $.fetch(_request);
												await Promise.allSettled([detectStutus]).then(results => {
													/*
													results.forEach((result, i) => {
														$.log(`🚧 ${$.name}, 调试信息`, `result[${i}]: ${JSON.stringify(result)}`, "");
													});
													*/
													switch (results[0].status) {
														case "fulfilled":
															let response = results[0].value;
															switch (response?.headers?.["content-encoding"] ?? response?.headers?.["Content-Encoding"]) {
																case "identity":
																	if (parseInt(response?.headers?.["content-length"] ?? response?.headers?.["Content-Length"], 10) > 4000) {
																		if (Settings.Types.includes("Translate")) $.lodash.set(URL, "query.subtype", "Translate");
																		else if (Settings.Types.includes("External")) $.lodash.set(URL, "query.subtype", "External");
																	} else {
																		if (Settings.Types.includes("External")) $.lodash.set(URL, "query.subtype", "External");
																	};
																	break;
																case "gzip":
																	break;
																case "br":
																	if (parseInt(response?.headers?.["content-length"] ?? response?.headers?.["Content-Length"], 10) > 2000) {
																		if (Settings.Types.includes("Translate")) $.lodash.set(URL, "query.subtype", "Translate");
																		else if (Settings.Types.includes("External")) $.lodash.set(URL, "query.subtype", "External");
																	} else {
																		if (Settings.Types.includes("External")) $.lodash.set(URL, "query.subtype", "External");
																	};
																	break;
																case "deflate":
																	break;
																default:
																	break;
															};
															break;
														case "rejected":
															$.log(`🚧 ${$.name}, 调试信息`, `detectStutus.reason: ${JSON.stringify(results[0].reason)}`, "");
															if (Settings.Types.includes("External")) $.lodash.set(URL, "query.subtype", "External");
															break;
													};
												});
											};
											rawBody = Browse.toBinary(body);
											break;
									};
									break;
								case "application/grpc":
								case "application/grpc+proto":
									break;
							};
							// 写入二进制数据
							$request.body = rawBody;
							break;
					};
					//break; // 不中断，继续处理URL
				case "GET":
					// 主机判断
					switch (HOST) {
						case "www.youtube.com":
						case "m.youtube.com":
							// 路径判断
							switch (PATH) {
								case "api/timedtext":
									if (!URL.query?.tlang) {
										$.log(`⚠ ${$.name}, 翻译语言：未指定`, "");
										// 保存原文语言
										if (URL.query?.v && URL.query?.lang) {
											Caches.Playlists.Subtitle.set(URL.query.v, URL.query.lang);
											Caches.Playlists.Subtitle = setCache(Caches?.Playlists.Subtitle, Settings.CacheSize);
											$.setjson(Caches.Playlists.Subtitle, `@DualSubs.${"Composite"}.Caches.Playlists.Subtitle`);
										};
										// 自动翻译字幕
										switch (Settings.AutoCC) {
											case true:
											default:
												$.log(`⚠ ${$.name}, 自动翻译字幕：开启`, "");
												if (Caches.tlang) {
													if (Caches.tlang !== URL.query?.lang) $.lodash.set(URL, "query.tlang", Caches.tlang);
												}
												break;
											case false:
												$.log(`⚠ ${$.name}, 自动翻译字幕：关闭`, "");
												break;
										};
									};
									if (URL.query?.tlang) {
										$.log(`⚠ ${$.name}, 翻译语言：已指定`, "");
										// 保存目标语言
										Caches.tlang = URL.query.tlang;
										$.setdata(Caches.tlang, `@DualSubs.${"YouTube"}.Caches.tlang`);
										// 字幕类型判断
										switch (Settings.Type) {
											case "Composite":
											case "Official":
											default:
												$.log(`⚠ ${$.name}, 官方字幕：合成器`, "");
												if (!Settings.ShowOnly) $.lodash.set(URL, "query.subtype", "Official"); // 官方字幕
												break;
											case "Translate":
												$.log(`⚠ ${$.name}, 翻译字幕：翻译器`, "");
												delete URL.query?.tlang;
												$.lodash.set(URL, "query.subtype", "Translate"); // 翻译字幕
												/*
												switch (URL.query?.kind) { // 类型判断
													case "asr":
														$.log(`⚠ ${$.name}, 自动生成（听译）字幕`, "");
														$.log(`⚠ ${$.name}, 仅支持官方字幕`, "");
														if (!Settings.ShowOnly) $.lodash.set(URL, "query.subtype", "Official"); // 官方字幕
														break;
													case "captions":
													default:
														$.log(`⚠ ${$.name}, 普通字幕`, "");
														delete URL.query?.tlang;
														$.lodash.set(URL, "query.subtype", "Translate"); // 翻译字幕
												};
												*/
												break;
											case "External":
												$.log(`⚠ ${$.name}, 外部字幕：外部源`, "");
												delete URL.query?.tlang
												$.lodash.set(URL, "query.subtype", "External"); // 外挂字幕
												break;
										};
									};
									break;
							};
							break;
					};
				case "HEAD":
				case "OPTIONS":
					break;
				case "CONNECT":
				case "TRACE":
					break;
			};
			if ($request.headers?.Host) $request.headers.Host = URL.host;
			$request.url = URI.stringify(URL);
			$.log(`🚧 ${$.name}, 调试信息`, `$request.url: ${$request.url}`, "");
			break;
		case false:
			break;
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		switch ($response) {
			default: // 有构造回复数据，返回构造的回复数据
				//$.log(`🚧 ${$.name}, finally`, `echo $response: ${JSON.stringify($response, null, 2)}`, "");
				if ($response.headers?.["Content-Encoding"]) $response.headers["Content-Encoding"] = "identity";
				if ($response.headers?.["content-encoding"]) $response.headers["content-encoding"] = "identity";
				if ($.isQuanX()) {
					if (!$response.status) $response.status = "HTTP/1.1 200 OK";
					delete $response.headers?.["Content-Length"];
					delete $response.headers?.["content-length"];
					delete $response.headers?.["Transfer-Encoding"];
					$.done($response);
				} else $.done({ response: $response });
				break;
			case undefined: // 无构造回复数据，发送修改的请求数据
				//$.log(`🚧 ${$.name}, finally`, `$request: ${JSON.stringify($request, null, 2)}`, "");
				$.done($request);
				break;
		};
	})
