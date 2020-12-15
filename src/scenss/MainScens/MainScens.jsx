import React, { useState } from 'react'

import { Button, Container, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import Controls from '../../components/controls'

import { GroupForm } from '../../components/GroupForm/GroupForm'
import { ListAplicants } from '../../components/ListAplicants/ListAplicants'
import { ClientsChange } from '../../components/ClientsChange/ClientsChange'
import { AddFormAplicants } from '../../components/AddFormAplicants/AddFormAplicants'

const initialStateForm = {
    clienId: "",
    applicantsIds: [],
    newApplicants: []
}

export const MainScens = () => {

    const [dataForm, setDataForm] = useState(initialStateForm)
    const [showAddForm, setShowAddForm] = useState(false);
    const [showJson, setShowJson] = useState(false);

    const showForm = () => {
        setShowAddForm(!showAddForm)
    }

    const formSubmit = () => {
        setShowJson(!showJson)
    }

    const getJsonIndented = (data) => JSON.stringify(data, null, 2) ;

    return (
        <div>
            <Container maxWidth="md">

                <GroupForm title="Клієнт" >
                    <ClientsChange dataForm={dataForm} initialStateForm={initialStateForm} setDataForm={setDataForm} ></ClientsChange>
                </GroupForm>

                {!!dataForm.clienId && (
                    <GroupForm title="Замовник">
                        <Grid container>
                            <Grid container item xs={12}  >
                                <ListAplicants dataForm={dataForm} setDataForm={setDataForm}   ></ListAplicants>
                            </Grid>
                            <Grid item xs={12}  >
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<AddIcon></AddIcon>}
                                    onClick={showForm}
                                    size="medium"
                                >
                                    {!showAddForm?'Додати':'Cховати форму'}
                                    </Button>

                                {!!showAddForm && <AddFormAplicants setShowAddForm={setShowAddForm} setDataForm={setDataForm} dataForm={dataForm}></AddFormAplicants>}
                            </Grid>
                            <Grid container item xs={12}  >

                                <Controls.Button onClick={formSubmit}>Зберегти заявку</Controls.Button>
                            </Grid>
                        </Grid>
                    </GroupForm>
                )}

                {!!showJson && (<GroupForm    title='Json запиту'>
                    <pre style={{ overflow: "auto" }} >{getJsonIndented(dataForm)}</pre>
                </GroupForm>)}

            </Container>

        </div >
    )
}
