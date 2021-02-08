// trả về true nếu nằm trong
// ngược lại trả về false
export type Point = {
    x: number
    y: number
}

export const isEqual = (p1: Point, p2: Point) => {
    return p1.x == p2.x && p1.y == p2.y
}

export const pointInPolys = (px: Point, arr: Point[]): boolean => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isEqual(px, arr[i])) return true

        let ia = i
        let ib = i + 1
        if (i == arr.length - 1) ib = 0; // end

        sum += tinhGoc(px, arr[ia], arr[ib]);
    }

    if (Math.round(sum) == 360) return true;
    return false;
}

// trả về số góc của điểm X với 2 đỉnh A, B
const tinhGoc = (px: Point, pa: Point, pb: Point): number => {

    const v1 = {
        x: pa.x - px.x,
        y: pa.y - px.y
    }
    const v2 = {
        x: pb.x - px.x,
        y: pb.y - px.y
    }

    const cosv1v2 = (v1.x * v2.x + v1.y * v2.y) / (Math.sqrt(v1.x * v1.x + v1.y * v1.y) * Math.sqrt(v2.x * v2.x + v2.y * v2.y));

    return Math.acos(cosv1v2) * (180 / Math.PI);
}