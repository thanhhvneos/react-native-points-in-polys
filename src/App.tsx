import React, { useState } from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

import Svg, {
    Polygon,
    Line,
    Rect,
    Circle,
} from 'react-native-svg'
import { pointInPolys } from './logic/PointInPolys'

type Point = {
    x: number
    y: number
}

const SIZE = 600
const TOTAL_POINT = 100
let ARR: number[] = []
for (let i = 1; i <= TOTAL_POINT; i++) {
    ARR.push(i)
}

const randomPoint = ({
    startX = 0,
    startY = 0
}): Point => {
    return {
        x: startX + Math.random() * (SIZE - startX),
        y: startY + Math.random() * (SIZE - startY)
    }
}

const getArrPoint = (): Point[] => {
    const pointA = randomPoint({aaa}) bbb

    const pointB = randomPoint({
        startX: pointA.x
    })
    const pointC = randomPoint({
        startX: pointA.x,
        startY: pointB.y
    })
    pointC.y = SIZE - pointC.y

    const pointD = randomPoint({})
    pointD.x = pointA.x + Math.random() * (Math.min(pointC.x, pointB.x) - pointA.x)
    pointD.y = Math.random() * pointA.y

    return [
        pointA,
        pointB,
        pointC,
        pointD
    ]
}

const convertArrPointToPoints = (arr: Point[]): string => {
    let res = ''

    arr.forEach((e: Point) => {
        res += `${e.x},${e.y} `
    })

    return res
}

export default () => {
    const [arr, setArr] = useState(getArrPoint())

    const pressRefresh = () => {
        setArr(getArrPoint())
    }

    return <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Svg height={SIZE} width={SIZE} color="blue">
            <Rect x={0} y={0} width={SIZE} height={SIZE} strokeWidth={2} stroke="red" />

            <Polygon
                points={convertArrPointToPoints(arr)}
                // fill="lime"
                stroke="purple"
                strokeWidth="1"
            />

            {/* <Circle
                key={arr[0].toString()}
                cx={arr[0].x}
                cy={arr[0].y}
                r={6}
                fill={"yellow"} />
            <Circle
                key={arr[1].toString()}
                cx={arr[1].x}
                cy={arr[1].y}
                r={6}
                fill={"orange"} />
            <Circle
                key={arr[2].toString()}
                cx={arr[2].x}
                cy={arr[2].y}
                r={6}
                fill={"purple"} /> */}

            {
                ARR.map((e) => {
                    const p = randomPoint({})
                    const isIn = pointInPolys(p, arr)
                    return <Circle
                        key={e.toString()}
                        cx={p.x}
                        cy={p.y}
                        r={6}
                        fill={isIn ? "blue" : "red"}
                        opacity={isIn ? 1 : 0.5} />
                })
            }

        </Svg>

        <Button title='Refresh' onPress={pressRefresh} />

    </SafeAreaView>
}
