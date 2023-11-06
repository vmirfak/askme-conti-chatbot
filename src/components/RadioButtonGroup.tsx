import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useEffect } from "react";

interface RadioButtonGroupProps {
    selectedOption: string;
    onSelectionChange: (selectedOption: string) => void;
}

function RadioButtonGroupCompnt({
    selectedOption,
    onSelectionChange,
}: RadioButtonGroupProps) {
    const [, setradiobuttonselecctedOption] =
        useState<string>(selectedOption);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedOption = event.target.value;
        setradiobuttonselecctedOption(selectedOption);
        onSelectionChange(selectedOption);
    };

    useEffect(() => {
        setradiobuttonselecctedOption(selectedOption);
    }, [selectedOption]);

    return (
        <FormControl>
            <FormLabel
                style={{ color: "black" }}
                id="demo-row-radio-buttons-group-label"
            >
                <b>Mode</b>
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleRadioChange}
            >
                <FormControlLabel
                    value="Q&A"
                    control={<Radio />}
                    label="Q&A"
                    style={{ color: "black" }}
                />
                <FormControlLabel
                    value="AI"
                    control={<Radio />}
                    label="AI"
                    style={{ color: "black" }}
                />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButtonGroupCompnt;
