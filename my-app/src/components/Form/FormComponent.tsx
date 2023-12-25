import React, { FormEvent, useState } from "react";
import { TextField, DatePicker, Dropdown, IDropdownOption, DefaultButton } from "@fluentui/react";
import { calendarStrings } from "./DatePickerFormat";
import { switchAlertError } from "../../AlertError/alertError";
import { errorType } from "../../enums/errorType";

export const FormComponent: React.FC = () => {
    const [titel, setTitel] = useState<string | undefined>(undefined)
    const [betrag, setBetrag] = useState<string | undefined>(undefined)
    const [einnahmeType, setEinnahmeType] = useState<string | number | undefined>(undefined)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    const einnahmeTypeDropdown: IDropdownOption[] = [
        { key: 'einnahme', text: 'Einnahme' },
        { key: 'ausgabe', text: 'Ausgabe' }
    ]

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        switch(undefined){
            case titel: return switchAlertError(errorType.RequiredTitel)
            case betrag: return switchAlertError(errorType.RequiredBetrag)
            case checkBetrag(): return switchAlertError(errorType.RequiredBetrag)
            case selectedDate: return switchAlertError(errorType.RequiredDate)
            case einnahmeType: return switchAlertError(errorType.RequiredEinnahmeType)
            default: return null
        }
    }

    const checkBetrag = () :boolean | undefined =>  {
        const checkEuroRegEx = /^\d*.(6[1-9]|7[0-9]|8[0-9]|9[0-9]|\d{3,})$/    
        return betrag?.match(checkEuroRegEx) ? undefined : true
    }

    return <form method="post" onSubmit={handleSubmit}>

        <TextField 
            type="text" 
            prefix="Titel" 
            name="titel" 
            onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
                (newValue === "") ? setTitel(undefined) : setTitel(newValue)
            }}
        />

        <TextField 
            type="number" 
            prefix="Betrag" 
            name="betrag" 
            step="0.01"
            onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setBetrag(newValue)} />

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
        />

        <DefaultButton text="Abschicken" type="submit" />
    </form>
}