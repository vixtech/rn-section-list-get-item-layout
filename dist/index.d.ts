export declare type SectionListDataProp = Array<{
    data: ReadonlyArray<any> | null;
}>;
export interface Parameters {
    getItemHeight: (rowData: any, sectionIndex: number, rowIndex: number) => number;
    getSeparatorHeight?: (sectionIndex: number, rowIndex: number) => number;
    getSectionHeaderHeight?: (sectionIndex: number) => number;
    getSectionFooterHeight?: (sectionIndex: number) => number;
    listHeaderHeight?: number | (() => number);
}
declare const _default: ({ getItemHeight, getSeparatorHeight, getSectionHeaderHeight, getSectionFooterHeight, listHeaderHeight, }: Parameters) => (data: {
    data: ReadonlyArray<any> | null;
}[], index: number) => {
    length: number;
    offset: number;
    index: number;
};
export default _default;
