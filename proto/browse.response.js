// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.response.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter long_type_string,output_javascript,optimize_code_size
// @generated from protobuf file "browse.response.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class Browse$Type extends MessageType {
    constructor() {
        super("Browse", [
            { no: 9, name: "contents", kind: "message", T: () => Contents },
            { no: 10, name: "continuationContents", kind: "message", T: () => Contents }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Browse
 */
export const Browse = new Browse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Contents$Type extends MessageType {
    constructor() {
        super("Contents", [
            { no: 49399797, name: "sectionListRenderer", kind: "message", T: () => SectionListRenderer },
            { no: 50195462, name: "n4F50195462", kind: "message", T: () => n4F50195462 },
            { no: 58173949, name: "singleColumnBrowseResultsRenderer", kind: "message", T: () => SingleColumnBrowseResultsRenderer },
            { no: 90823135, name: "musicSideAlignedItemRenderer", kind: "message", T: () => MusicSideAlignedItemRenderer },
            { no: 91303872, name: "gridRenderer", kind: "message", T: () => GridRenderer },
            { no: 153515154, name: "n6F153515154", kind: "message", T: () => n6F153515154 },
            { no: 221496734, name: "musicDescriptionShelfRenderer", kind: "message", T: () => MusicDescriptionShelfRenderer }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Contents
 */
export const Contents = new Contents$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SingleColumnBrowseResultsRenderer$Type extends MessageType {
    constructor() {
        super("SingleColumnBrowseResultsRenderer", [
            { no: 1, name: "tabs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Tabs }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message SingleColumnBrowseResultsRenderer
 */
export const SingleColumnBrowseResultsRenderer = new SingleColumnBrowseResultsRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MusicSideAlignedItemRenderer$Type extends MessageType {
    constructor() {
        super("MusicSideAlignedItemRenderer", [
            { no: 1, name: "startItems", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Contents }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message MusicSideAlignedItemRenderer
 */
export const MusicSideAlignedItemRenderer = new MusicSideAlignedItemRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GridRenderer$Type extends MessageType {
    constructor() {
        super("GridRenderer", [
            { no: 1, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Contents }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message GridRenderer
 */
export const GridRenderer = new GridRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Tabs$Type extends MessageType {
    constructor() {
        super("Tabs", [
            { no: 58174010, name: "tabRenderer", kind: "message", T: () => TabRenderer }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Tabs
 */
export const Tabs = new Tabs$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TabRenderer$Type extends MessageType {
    constructor() {
        super("TabRenderer", [
            { no: 2, name: "title", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "selected", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "content", kind: "message", T: () => Contents },
            { no: 11, name: "tabIdentifier", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message TabRenderer
 */
export const TabRenderer = new TabRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SectionListRenderer$Type extends MessageType {
    constructor() {
        super("SectionListRenderer", [
            { no: 1, name: "contents", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Contents },
            { no: 6, name: "header", kind: "message", T: () => Contents }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message SectionListRenderer
 */
export const SectionListRenderer = new SectionListRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n4F50195462$Type extends MessageType {
    constructor() {
        super("n4F50195462", [
            { no: 1, name: "n5F1", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Contents }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n4F50195462
 */
export const n4F50195462 = new n4F50195462$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MusicDescriptionShelfRenderer$Type extends MessageType {
    constructor() {
        super("MusicDescriptionShelfRenderer", [
            { no: 3, name: "description", kind: "message", T: () => Description },
            { no: 10, name: "footer", kind: "message", T: () => Footer }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message MusicDescriptionShelfRenderer
 */
export const MusicDescriptionShelfRenderer = new MusicDescriptionShelfRenderer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Description$Type extends MessageType {
    constructor() {
        super("Description", [
            { no: 1, name: "runs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Runs }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Description
 */
export const Description = new Description$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n6F153515154$Type extends MessageType {
    constructor() {
        super("n6F153515154", [
            { no: 172660663, name: "n7F172660663", kind: "message", T: () => n7F172660663 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n6F153515154
 */
export const n6F153515154 = new n6F153515154$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n7F172660663$Type extends MessageType {
    constructor() {
        super("n7F172660663", [
            { no: 1, name: "n8F1", kind: "message", T: () => n8F1 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n7F172660663
 */
export const n7F172660663 = new n7F172660663$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Footer$Type extends MessageType {
    constructor() {
        super("Footer", [
            { no: 1, name: "runs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Runs }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Footer
 */
export const Footer = new Footer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n8F1$Type extends MessageType {
    constructor() {
        super("n8F1", [
            { no: 168777401, name: "n9F168777401", kind: "message", T: () => n9F168777401 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n8F1
 */
export const n8F1 = new n8F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n9F168777401$Type extends MessageType {
    constructor() {
        super("n9F168777401", [
            { no: 5, name: "n10F5", kind: "message", T: () => n10F5 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n9F168777401
 */
export const n9F168777401 = new n9F168777401$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n10F5$Type extends MessageType {
    constructor() {
        super("n10F5", [
            { no: 465160965, name: "n11F465160965", kind: "message", T: () => n11F465160965 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n10F5
 */
export const n10F5 = new n10F5$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n11F465160965$Type extends MessageType {
    constructor() {
        super("n11F465160965", [
            { no: 4, name: "n12F4", kind: "message", T: () => n12F4 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n11F465160965
 */
export const n11F465160965 = new n11F465160965$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n12F4$Type extends MessageType {
    constructor() {
        super("n12F4", [
            { no: 1, name: "n13F1", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => n13F1 },
            { no: 2, name: "originText", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n12F4
 */
export const n12F4 = new n12F4$Type();
// @generated message type with reflection information, may provide speed optimized methods
class n13F1$Type extends MessageType {
    constructor() {
        super("n13F1", [
            { no: 1, name: "f1", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message n13F1
 */
export const n13F1 = new n13F1$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Runs$Type extends MessageType {
    constructor() {
        super("Runs", [
            { no: 1, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message Runs
 */
export const Runs = new Runs$Type();
