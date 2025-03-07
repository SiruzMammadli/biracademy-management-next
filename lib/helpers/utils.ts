export const handleFile = async (file: File) => {
    if (file.name === undefined) return null;
    return {
        base64: Buffer.from(await file.arrayBuffer()).toString("base64"),
        type: file.type, name: file.name, size: file.size,
    };
};

export const formatNumber = (val: number): string => {
    if (val < 1_000_000) return new Intl.NumberFormat('tr-TR', {
        style: 'decimal',
    }).format(val);
    else {
        const splitVal = (val / 1_000_000).toString().split('.');

        if (splitVal[1][0] === "0" && splitVal[1][1] === "0") return `${splitVal[0]}M`;
        else if (splitVal[1][0] > "0" && splitVal[1][1] === "0") return `${splitVal[0]}.${splitVal[1][0]}M`;
        else return `${splitVal[0]}.${splitVal[1].substring(0, 2)}M`;
    }
}

type Currency = "AZN" | "USD" | "TRY"
export const formatCurrency = (val: number, unit: Currency = "AZN"): string => {
    switch (unit) {
        case "AZN":
            return `${formatNumber(val)}₼`;
        case "USD":
            return `$${formatNumber(val)}`;
        case "TRY":
            return `₺${formatNumber(val)}`;
        default:
            throw new Error(`Unsupported format ${unit}`);
    }
}