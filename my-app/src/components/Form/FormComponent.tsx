import React, { FormEvent } from "react";

export const FormComponent: React.FC = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event)
    }
    return <form method="post" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="titel">Titel</label>
            <input type="text" name="titel" title="title"/>
        </div>
        <div>
            <label htmlFor="betrag">Betrag</label>
            <input type="number" step="0.01" name="betrag" title="betrag" placeholder="0.00 €"/>
        </div>
        <div>
            <label htmlFor="einnahme">Einnahme</label>
            <input type="radio" name="einnahmeType" title="einnahme" value={'einnahme'}/>

            <label htmlFor="ausgabe">Ausgabe</label>
            <input type="radio" name="einnahmeType" title="ausgabe" value={'ausgabe'}/>
        </div>
        <div>
            <label htmlFor="datum">Datum</label>
            <input type="date" name="datum" title="datum" placeholder="tt.mm.jjjj"/>
        </div>
        <div>
            <button type="submit">Abschicken</button>
        </div>
    </form>
}