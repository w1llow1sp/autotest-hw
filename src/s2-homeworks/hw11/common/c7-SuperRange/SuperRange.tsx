import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                'color':'#00CC22',
                '& .MuiSlider-thumb': {
                    color: '#00CC22', // Цвет точки ползунка
                    background: '#FFFFFF', // Цвет фона точки
                    boxShadow: '0px 0px 40px rgba(29, 33, 38, 0.13), 0px 0px 2px rgba(29, 33, 38, 0.1)', // Тень точки
                    padding:1,
                    border:' 1px solid #00CC22',
                },
                maxWidth:'200px',
                margin:'0'

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
