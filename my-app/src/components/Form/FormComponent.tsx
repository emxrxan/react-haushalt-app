import React, { FormEvent, useState } from "react";
import { TextField, DatePicker, Dropdown, IDropdownOption, DefaultButton } from "@fluentui/react";
import { calendarStrings } from "./DatePickerFormat";
import { switchAlertError } from "../../AlertError/alertError";
import { errorType } from "../../enums/errorType";
import { eintragType } from "../../interface/eintragType";
import { Eintrag } from "../../class/Eintrag";

interface IFormType {
    setNewEintrag: (eintrag:eintragType) => void
}

export const FormComponent: React.FC<IFormType> = (props) => {
    const { setNewEintrag } = props
    const [getError, setGetError] = useState<boolean>(false)
    const [titel, setTitel] = useState<string>()
    const [betrag, setBetrag] = useState<number>()
    const [einnahmeType, setEinnahmeType] = useState<string>()
    const [selectedDate, setSelectedDate] = useState<Date>()

    const einnahmeTypeDropdown: IDropdownOption[] = [
        { key: 'einnahme', text: 'Einnahme' },
        { key: 'ausgabe', text: 'Ausgabe' }
    ]

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        switch(undefined){
            case titel: 
                setGetError(true)
                return switchAlertError(errorType.RequiredTitel)
            case betrag: 
                setGetError(true)
                return switchAlertError(errorType.RequiredBetrag)
            case checkBetrag(): 
                setGetError(true)
                return switchAlertError(errorType.RequiredBetrag)
            case einnahmeType: 
                setGetError(true)
                return switchAlertError(errorType.RequiredEinnahmeType)
            case selectedDate:
                setGetError(true)
                return switchAlertError(errorType.RequiredDate)
            default: return setNewEintrag({
                titel: titel as string,
                betrag: betrag as number,
                einnhameType: einnahmeType as string,
                date: selectedDate as Date
            })
        }
    }

    const checkBetrag = () :boolean | undefined =>  {
        const checkEuroRegEx = /^\d*.(\d{3,})$/   
        const betragString = betrag?.toString()
        return betragString?.match(checkEuroRegEx) ? undefined : true
    }

    return <form method="post" onSubmit={handleSubmit}>

        <TextField
            type="text" 
            prefix="Titel" 
            name="titel" 
            onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
                (newValue === undefined || newValue === "") ? setTitel(undefined) : setTitel(newValue)
            }}
            errorMessage={(!titel && getError) ? "Error" : undefined}
            styles={{errorMessage: {
                display: 'none'
            }}}
        />

        <TextField 
            type="number" 
            prefix="Betrag" 
            name="betrag" 
            step="0.01"
            onChange={(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
                (newValue === undefined || newValue === "") ? setBetrag(undefined) : setBetrag(parseFloat(newValue))
            }}
            errorMessage={(!betrag && getError) ? "Error" : undefined}
            styles={{errorMessage: {
                display: 'none'
            }}}
        />

        <Dropdown
            options={einnahmeTypeDropdown}
            dropdownWidth={300}
            onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
                (option?.text === undefined || option?.text === "") ? setEinnahmeType(undefined) : setEinnahmeType(option.text)
            }}
            errorMessage={(!einnahmeType && getError) ? "Error" : undefined}
            styles={{errorMessage: {
                display: 'none'
            }}}
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
            textField={{
                errorMessage: (!selectedDate && getError) ? "Error" : undefined,
                styles: {
                    errorMessage: {display: 'none'}
                }
            }}
        />

        <DefaultButton text="Abschicken" type="submit" />
    </form>
}