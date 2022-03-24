import {useState} from 'react'
import {Checkbox} from 'antd';


function CarouselComponent({date}) {
    const [checkedState, setCheckedState] = useState(false)

    function onChange(e) {
        setCheckedState(e.target.checked)
    }

    return (
        <div className={checkedState ? 'card checked' : 'card'}>
            <p className={checkedState ? 'card__text checked' : 'card__text'}>{date}</p>
            <div>
                <Checkbox onChange={onChange}></Checkbox>
            </div>
        </div>
    )
}

export default CarouselComponent;