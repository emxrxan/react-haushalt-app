import React, { FormEvent, useState } from "react";
import { TextField, DatePicker, Dropdown, IDropdownOption, DefaultButton } from "@fluentui/react";
import { calendarStrings } from "./DatePickerFormat";

export const FormComponent: React.FC = () => {
    const [einnahmeType, setEinnahmeType] = useState<string | number | undefined>(undefined)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    const einnahmeTypeDropdown: IDropdownOption[] = [
        { key: 'einnahme', text: 'Einnahme' },
        { key: 'ausgabe', text: 'Ausgabe' }
    ]

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(selectedDate && einnahmeType){
            console.log(selectedDate)
            console.log(einnahmeType)
            console.log(event)
        } else {
            alert('Bitte in allen Felde etwas eintragen!')
        }
    }

    return <form method="post" onSubmit={handleSubmit}>

        <TextField type="text" prefix="Titel" name="titel" required />

        <TextField type="number" prefix="Betrag" name="betrag" required />

        <Dropdown
            options={einnahmeTypeDropdown}
            dropdownWidth={300}
            onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => setEinnahmeType(option?.key)}
        />

        <DatePicker
            placeholder="dd.mm.jjjj"
            strings={calendarStrings} 
            formatDate={(date) => date!!.toLocaleDateString('de-DE',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })}
            value={selectedDate}
            onSelectDate={(date) =>  { date && setSelectedDate(date) }}
            isRequired
        />

        <DefaultButton text="Abschicken" type="submit" />
    </form>
}