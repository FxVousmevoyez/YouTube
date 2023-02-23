// @generated by protobuf-ts 2.8.2 with parameter long_type_string,output_javascript_es2015
// @generated from protobuf file "player.proto" (syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Player$Type extends MessageType {
    constructor() {
        super("Player", [
            { no: 10, name: "captions", kind: "message", T: () => Player_Captions }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Player.Captions captions */ 10:
                    message.captions = Player_Captions.internalBinaryRead(reader, reader.uint32(), options, message.captions);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Player.Captions captions = 10; */
        if (message.captions)
            Player_Captions.internalBinaryWrite(message.captions, writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Player
 */
export const Player = new Player$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Player_Captions$Type extends MessageType {
    constructor() {
        super("Player.Captions", [
            { no: 51621377, name: "playerCaptionsTracklistRenderer", kind: "message", T: () => Player_Captions_PlayerCaptionsTracklistRenderer }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Player.Captions.PlayerCaptionsTracklistRenderer playerCaptionsTracklistRenderer */ 51621377:
                    message.playerCaptionsTracklistRenderer = Player_Captions_PlayerCaptionsTracklistRenderer.internalBinaryRead(reader, reader.uint32(), options, message.playerCaptionsTracklistRenderer);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Player.Captions.PlayerCaptionsTracklistRenderer playerCaptionsTracklistRenderer = 51621377; */
        if (message.playerCaptionsTracklistRenderer)
            Player_Captions_PlayerCaptionsTracklistRenderer.internalBinaryWrite(message.playerCaptionsTracklistRenderer, writer.tag(51621377, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Player.Captions
 */
export const Player_Captions = new Player_Captions$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Player_Captions_PlayerCaptionsTracklistRenderer$Type extends MessageType {
    constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer", [
            { no: 1, name: "captionTracks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks },
            { no: 2, name: "audioTracks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks },
            { no: 3, name: "translationLanguages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages },
            { no: 4, name: "defaultAudioTrackIndex", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "defaultCaptionTrackIndex", kind: "scalar", jsonName: "defaultAudioTrackIndex", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { captionTracks: [], audioTracks: [], translationLanguages: [], defaultAudioTrackIndex: 0, defaultCaptionTrackIndex: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks captionTracks */ 1:
                    message.captionTracks.push(Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks audioTracks */ 2:
                    message.audioTracks.push(Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages translationLanguages */ 3:
                    message.translationLanguages.push(Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 defaultAudioTrackIndex */ 4:
                    message.defaultAudioTrackIndex = reader.int32();
                    break;
                case /* int32 defaultCaptionTrackIndex = 6 [json_name = "defaultAudioTrackIndex"];*/ 6:
                    message.defaultCaptionTrackIndex = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks captionTracks = 1; */
        for (let i = 0; i < message.captionTracks.length; i++)
            Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks.internalBinaryWrite(message.captionTracks[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks audioTracks = 2; */
        for (let i = 0; i < message.audioTracks.length; i++)
            Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks.internalBinaryWrite(message.audioTracks[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages translationLanguages = 3; */
        for (let i = 0; i < message.translationLanguages.length; i++)
            Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages.internalBinaryWrite(message.translationLanguages[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int32 defaultAudioTrackIndex = 4; */
        if (message.defaultAudioTrackIndex !== 0)
            writer.tag(4, WireType.Varint).int32(message.defaultAudioTrackIndex);
        /* int32 defaultCaptionTrackIndex = 6 [json_name = "defaultAudioTrackIndex"]; */
        if (message.defaultCaptionTrackIndex !== 0)
            writer.tag(6, WireType.Varint).int32(message.defaultCaptionTrackIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer
 */
export const Player_Captions_PlayerCaptionsTracklistRenderer = new Player_Captions_PlayerCaptionsTracklistRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks$Type extends MessageType {
    constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks", [
            { no: 1, name: "baseUrl", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "name", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Name },
            { no: 3, name: "vssId", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "languageCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "kind", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "rtl", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "isTranslatable", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { baseUrl: "", name: [], vssId: "", languageCode: "", isTranslatable: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string baseUrl */ 1:
                    message.baseUrl = reader.string();
                    break;
                case /* repeated Name name */ 2:
                    message.name.push(Name.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string vssId */ 3:
                    message.vssId = reader.string();
                    break;
                case /* string languageCode */ 4:
                    message.languageCode = reader.string();
                    break;
                case /* optional string kind */ 5:
                    message.kind = reader.string();
                    break;
                case /* optional bool rtl */ 6:
                    message.rtl = reader.bool();
                    break;
                case /* bool isTranslatable */ 7:
                    message.isTranslatable = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string baseUrl = 1; */
        if (message.baseUrl !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.baseUrl);
        /* repeated Name name = 2; */
        for (let i = 0; i < message.name.length; i++)
            Name.internalBinaryWrite(message.name[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string vssId = 3; */
        if (message.vssId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.vssId);
        /* string languageCode = 4; */
        if (message.languageCode !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.languageCode);
        /* optional string kind = 5; */
        if (message.kind !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.kind);
        /* optional bool rtl = 6; */
        if (message.rtl !== undefined)
            writer.tag(6, WireType.Varint).bool(message.rtl);
        /* bool isTranslatable = 7; */
        if (message.isTranslatable !== false)
            writer.tag(7, WireType.Varint).bool(message.isTranslatable);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.CaptionTracks
 */
export const Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks = new Player_Captions_PlayerCaptionsTracklistRenderer_CaptionTracks$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks$Type extends MessageType {
    constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks", [
            { no: 2, name: "captionTrackIndices", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "defaultCaptionTrackIndex", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "visibility", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "hasDefaultTrack", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "captionsInitialState", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { captionTrackIndices: [], defaultCaptionTrackIndex: 0, visibility: 0, hasDefaultTrack: false, captionsInitialState: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated int32 captionTrackIndices */ 2:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.captionTrackIndices.push(reader.int32());
                    else
                        message.captionTrackIndices.push(reader.int32());
                    break;
                case /* int32 defaultCaptionTrackIndex */ 3:
                    message.defaultCaptionTrackIndex = reader.int32();
                    break;
                case /* int32 visibility */ 5:
                    message.visibility = reader.int32();
                    break;
                case /* bool hasDefaultTrack */ 6:
                    message.hasDefaultTrack = reader.bool();
                    break;
                case /* int32 captionsInitialState */ 11:
                    message.captionsInitialState = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated int32 captionTrackIndices = 2; */
        if (message.captionTrackIndices.length) {
            writer.tag(2, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.captionTrackIndices.length; i++)
                writer.int32(message.captionTrackIndices[i]);
            writer.join();
        }
        /* int32 defaultCaptionTrackIndex = 3; */
        if (message.defaultCaptionTrackIndex !== 0)
            writer.tag(3, WireType.Varint).int32(message.defaultCaptionTrackIndex);
        /* int32 visibility = 5; */
        if (message.visibility !== 0)
            writer.tag(5, WireType.Varint).int32(message.visibility);
        /* bool hasDefaultTrack = 6; */
        if (message.hasDefaultTrack !== false)
            writer.tag(6, WireType.Varint).bool(message.hasDefaultTrack);
        /* int32 captionsInitialState = 11; */
        if (message.captionsInitialState !== 0)
            writer.tag(11, WireType.Varint).int32(message.captionsInitialState);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.AudioTracks
 */
export const Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks = new Player_Captions_PlayerCaptionsTracklistRenderer_AudioTracks$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages$Type extends MessageType {
    constructor() {
        super("Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages", [
            { no: 1, name: "languageCode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "languageName", kind: "message", T: () => Name }
        ]);
    }
    create(value) {
        const message = { languageCode: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string languageCode */ 1:
                    message.languageCode = reader.string();
                    break;
                case /* Name languageName */ 2:
                    message.languageName = Name.internalBinaryRead(reader, reader.uint32(), options, message.languageName);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string languageCode = 1; */
        if (message.languageCode !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.languageCode);
        /* Name languageName = 2; */
        if (message.languageName)
            Name.internalBinaryWrite(message.languageName, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Player.Captions.PlayerCaptionsTracklistRenderer.TranslationLanguages
 */
export const Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages = new Player_Captions_PlayerCaptionsTracklistRenderer_TranslationLanguages$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Name$Type extends MessageType {
    constructor() {
        super("Name", [
            { no: 1, name: "runs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Name_Runs }
        ]);
    }
    create(value) {
        const message = { runs: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Name.Runs runs */ 1:
                    message.runs.push(Name_Runs.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated Name.Runs runs = 1; */
        for (let i = 0; i < message.runs.length; i++)
            Name_Runs.internalBinaryWrite(message.runs[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Name
 */
export const Name = new Name$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Name_Runs$Type extends MessageType {
    constructor() {
        super("Name.Runs", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { text: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string text */ 1:
                    message.text = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string text = 1; */
        if (message.text !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.text);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Name.Runs
 */
export const Name_Runs = new Name_Runs$Type();
