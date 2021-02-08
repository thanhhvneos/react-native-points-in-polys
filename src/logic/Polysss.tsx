/**
    Cho n điểm đại điện cho n đỉnh của 1 đa giác lồi nhưng ko sắp xếp theo thứ tự để tạo thành một đa giác lồi
    Giải quyết: Xác định thứ tự theo chiều kim đồng hồ
        Chọn 1 điểm A:
            - Tìm đỉnh kế tiếp từ các điểm còn lại
                - Tìm các điểm "bên phải" (có x lớn hơn), ưu tiên đỉnh có y "gần hơn"
                - Nếu không có tìm các điểm "bên trái", ưu tiên đỉnh có y "gần hơn"
        Lặp lại cho đến khi hết mảng
*/

import { Point } from './PointInPolys'

export const sortPolysss = (arr: Point[]): Point[] => {
    const arrRes: Point[] = []

    const length = arr.length
    if (length == 0) return []

    arrRes.push(arr[0])



    return arrRes
}