import React from "react";
import {render} from "@testing-library/react";
import EvincedUT from "@evinced/unit-tester";
import {Modal} from "./Modal";
import Button from "./Button";

const ModalTest = () => {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                id="open-button"
                testid="open-modal-button"
            >
                Open
            </Button>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                header={{
                    label: 'Modal Header',
                    isDismissible: true
                }}
                testid="modal-test"
                id="modal"
            />
        </>
    )
}

it('should pass Evinced tests', async () => {
    render(<ModalTest />)

    const results = await EvincedUT.analyzeModal('#open-button')
    expect(results).toHaveNoFailures()
})
