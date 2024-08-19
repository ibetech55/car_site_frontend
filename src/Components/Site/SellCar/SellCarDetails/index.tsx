import { Col, Row } from 'antd'
import FormInput from '../../../Common/FormInput'
import DropdownMakes from '../../../Common/DropdownMakes'
import { ISelect } from '../../../../Data/Common/ISelect'
import { ISellCarForm } from '../../../../Data/CarDtos/SellCarDto'
import DropdownModels from '../../../Common/DropdownModels'
import DropdownYears from '../../../Common/DropdownYears'
import DropdownTransmission from '../../../Common/DropdownTransmission'
import ColorPicker, { IColors } from '../../../Common/ColorPicker'
import "./index.scss"
import { handleFormChange } from '../../../../Utils/HandleFormChange'
import RadioButton from '../../../Common/RadioButton'
import SectionText from '../../../Common/SectionText'

interface IProps {
  handleGetMakesList: (stateCode: string) => void;
  errorEmail: string;
  form: ISellCarForm,
  setForm: (form: ISellCarForm) => void;
  handleGetModelsListById: (id: string) => void;
}

const exteriorColors: IColors[] = [
  { label: "Black", color: "black" },
  { label: "Grey", color: "grey" },
  { label: "White", color: "white" },
  { label: "Silver", color: "silver" },
  { label: "Red", color: "red" },
  { label: "Charcoal Gray", color: "#747675" },
  { label: "Beige", color: "beige" },
  { label: "Gold", color: "gold" },
  { label: "Tan", color: "tan" },
  { label: "Brown", color: "brown" },
  { label: "Burgundy", color: "#800020" },
  { label: "Orange", color: "orange" },
  { label: "Yellow", color: "yellow" },
  { label: "Dark green", color: "DarkGreen" },
  { label: "Bright green", color: "#66FF00" },
  { label: "Light green", color: "#66FF99" },
  { label: "Blue", color: "blue" },
  { label: "Dark blue", color: "#00156D" },
  { label: "Bright blue", color: "#0096FF" },
  { label: "Light blue", color: "#ADD8E6" }
]

const interiorColors: IColors[] = [
  { label: "Black", color: "black" },
  { label: "Grey", color: "grey" },
  { label: "White", color: "white" },
  { label: "Beige", color: "beige" },
  { label: "Charcoal Gray", color: "#747675" },
  { label: "Tan", color: "tan" },
  { label: "Brown", color: "brown" },
  { label: "Red", color: "red" },
]

const SellCarDetails: React.FC<IProps> = ({ handleGetMakesList, handleGetModelsListById, form, setForm }) => {


  const cols = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12 };
  const cols2 = { xs: 24, sm: 24, md: 8, lg: 8, xl: 8 };

  const affirmativeOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ]

  return (
    <div className='sell-car-details'>
      <SectionText text="Details" />

      <Row gutter={[40, 40]} className="row-gutter-bottom">
        <Col {...cols}>
          <DropdownMakes label="Make"
            showSearch
            required
            value={form.make}
            onChange={(_: unknown, option: ISelect | ISelect[]) => {
              const val = option as ISelect;
              setForm({ ...form, make: val.label, model: "" });
              handleGetModelsListById(val.value);
              handleGetMakesList(val.value);
            }} />
        </Col>
        <Col {...cols}>
          <DropdownModels label="Model"
            showSearch
            required
            value={form.model}
            onChange={(_: unknown, option: ISelect | ISelect[]) => {
              const val = option as ISelect;
              setForm({ ...form, model: val.label });
            }} />
        </Col>
        <Col {...cols}>
          <DropdownYears
            label="Year"
            showSearch
            required
            value={form.year}
            onChange={(_: unknown, option: ISelect | ISelect[]) => {
              const val = option as ISelect;
              setForm({ ...form, year: val.value });
            }}
          />
        </Col>
        <Col {...cols}>
          <DropdownTransmission
            label="Transmission"
            showSearch
            required
            value={form.transmission}
            onChange={(_: unknown, option: ISelect | ISelect[]) => {
              const val = option as ISelect;
              setForm({ ...form, transmission: val.value });
            }}
          />
        </Col>
        <Col {...cols}>
          <FormInput
            label="Drivetrain"
            id="drivetrain"
            name="drivetrain"
            required
            value={form.drivetrain}
            onChange={(e) => handleFormChange(e, form, setForm)}
          />
        </Col>
        <Col {...cols}>
          <FormInput
            label="Engine"
            required
            value={form.engine}
            name="engine"
            id="engine"
            onChange={(e) => handleFormChange(e, form, setForm)}
          />
        </Col>
        <Col {...cols}>
          <Row gutter={[40, 40]} className="row-gutter-bottom">
            <Col>
              <ColorPicker
                label="Exterior Color"
                id="exteriorColor"
                colors={exteriorColors}
                colorSelected={form.exteriorColor}
                onChange={(colorSel) => setForm({ ...form, exteriorColor: colorSel })}
              />
            </Col>
            <Col>
              <ColorPicker
                label="Interior Color"
                id="interiorColor"
                colors={interiorColors}
                colorSelected={form.interiorColor}
                onChange={(colorSel) => setForm({ ...form, interiorColor: colorSel })}
              />
            </Col>
          </Row>
        </Col>

        <Col {...cols}>
          <FormInput
            label="Mileage"
            required
            name="mileage"
            id="mileage"
            value={form.mileage}
            onChange={(e) => handleFormChange(e, form, setForm)}
            type="number"
          />
        </Col>
        <Col {...cols}>
          <FormInput
            label="Zip Code"
            name="zipCode"
            id="zipCode"
            required
            value={form.zipCode}
            onChange={(e) => handleFormChange(e, form, setForm)}
          />
        </Col>
        <Col {...cols}>
          <Row gutter={[20, 20]} className="row-gutter-bottom">
            <Col {...cols2}>
              <FormInput
                label="Number of owners"
                required
                id="numberOwners"
                name="numberOwners"
                value={form.numberOwners}
                onChange={(e) => handleFormChange(e, form, setForm)}
                type="number"
              />
            </Col>
            <Col {...cols2}>
              <RadioButton
                label="Making payments"
                value={form.hasPayments}
                options={affirmativeOptions}
                onChange={(val) => setForm({ ...form, hasPayments: val })} />
            </Col>
            <Col {...cols2}>
              <FormInput
                label="Number of keys"
                required
                id="numberKeys"
                name="numberKeys"
                value={form.numberKeys}
                onChange={(e) => handleFormChange(e, form, setForm)}
                type="number"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default SellCarDetails
