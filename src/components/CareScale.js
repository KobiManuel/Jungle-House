function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? '☀️' : '💧'
    
    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default CareScale
/*function CareScale(props) {
        const scaleValue = props.value
    
        const range = [1, 2, 3]
    
        return (
            <div>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
                )}
            </div>
        )
    }


export default CareScale */