export const handleFile = async (file: File) => {
    if (file.name === undefined) return null;
    return {
        base64: Buffer.from(await file.arrayBuffer()).toString("base64"),
        type: file.type, name: file.name, size: file.size,
    };
};