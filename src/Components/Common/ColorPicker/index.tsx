import { Card, Col, Dropdown, Row, Typography } from 'antd'
import React, { useState } from 'react'
import "./index.scss";
import Label from '../Label';
import { error } from 'console';

export interface IColors {
    color: string;
    label: string;
}

interface IProps {
    label: string;
    colors: IColors[];
    colorSelected?: string;
    onChange: (color: string) => void;
    id?: string;
}
const cols = { xs: 6, sm: 6, md: 6, lg: 6, xl: 6 };

const ColorPicker: React.FC<IProps> = ({ colors, colorSelected, onChange, label, id }) => {
    const [colorLabelSelected, colorlabelSelected] = useState("");
    return (
        <div className='color-picker'>
            <Label id={id} label={label} required />
            <div>
                <Dropdown
                    trigger={["click"]}
                    placement="bottomLeft"
                    overlayClassName=""
                    dropdownRender={() => (
                        <Card className="color-picker__card">
                            <Row gutter={[12, 12]} className="row-gutter-bottom">
                                {colors.map((color, index) => (
                                    <Col {...cols} key={index} className="color-picker__card-col">
                                        <div onClick={() => {
                                            colorlabelSelected(color.label);
                                            onChange(color.color)
                                        }} className="color-picker__color" style={{ background: color.color }}></div>
                                        <Typography.Text className="color-picker__color-label">{color.label}</Typography.Text>
                                    </Col>

                                ))}
                            </Row>
                        </Card>
                    )}
                >
                    <div className='color-picker__button'>
                        <div style={{ backgroundColor: colorSelected ? colorSelected : "#d9d9d9" }}></div>
                    </div>
                </Dropdown>
            </div>
            <Typography.Text className="color-picker__color-label">{colorLabelSelected?.toUpperCase()}</Typography.Text>
        </div>
    )
}

export default ColorPicker
