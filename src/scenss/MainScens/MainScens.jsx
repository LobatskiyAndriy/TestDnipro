import React, { useState } from 'react'

import { Button, Container, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';

import Controls from '../../components/controls'

import { GroupForm } from '../../components/GroupForm/GroupForm'
import ListAplicants from '../../components/ListAplicants/ListAplicants'
import ClientsChange from '../../components/ClientsChange/ClientsChange'
import { AddFormAplicants } from '../../components/AddFormAplicants/AddFormAplicants'
import { useSelector } from 'react-redux';
import JsomShow from '../../components/JsomShow/JsomShow';



export const MainScens = () => {

    const { activeUser } = useSelector(({ users }) => users)

    const [showAddForm, setShowAddForm] = useState(false);
    const [showJson, setShowJson] = useState(false);

    const showForm = () => {
        setShowAddForm(!showAddForm)
    }

    const formSubmit = () => {
        setShowJson(!showJson)
    }

    return (
        <div>
            <Container maxWidth="md">

                <GroupForm title="Клієнт" >
                    <ClientsChange />
                </GroupForm>

                {!!activeUser && (
                    <GroupForm title="Замовник">
                        <Grid container>
                            <Grid container item xs={12}  >
                                <ListAplicants />
                            </Grid>
                            <Grid item xs={12}  >
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    endIcon={<AddIcon></AddIcon>}
                                    onClick={showForm}
                                    size="medium"
                                >
                                    {!showAddForm ? 'Додати' : 'Cховати форму'}
                                </Button>

                                {!!showAddForm && <AddFormAplicants setShowAddForm={setShowAddForm} ></AddFormAplicants>}
                            </Grid>
                            <Grid container item xs={12}  >
                                <Controls.Button onClick={formSubmit}>Зберегти заявку</Controls.Button>
                            </Grid>
                        </Grid>
                    </GroupForm>
                )}



                {!!showJson && (<GroupForm title='Json запиту'>
                    <JsomShow />
                </GroupForm>)}

            </Container>

        </div >
    )
}
