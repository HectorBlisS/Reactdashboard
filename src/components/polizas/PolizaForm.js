/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {
    Paper,
    Toolbar,
    ToolbarTitle,
    ToolbarGroup,
    RaisedButton,
    TextField,
    Divider,
    RadioButton,
    RadioButtonGroup,
    Toggle
} from 'material-ui';

import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';




const PolizaForm = ({course, allAuthors, onSave, onChange, saving, errors}) => {
    return (
        <Paper style={styles.margenes}>
            <Toolbar>

                <ToolbarTitle
                    text="Captura de poliza"
                />
                <ToolbarGroup>
                    <RaisedButton label="Guardar"/>
                </ToolbarGroup>
            </Toolbar>

            <div style={styles.formGroup}>

                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                hintText="Hint Text"
                floatingLabelText="Fixed Floating Label Text"
                floatingLabelFixed={true}
                />

            </div>

                <Divider/>

            <div style={styles.formGroup}>
                <RadioButtonGroup name="notRight" labelPosition="left" style={styles.block}>
                    <RadioButton
                        value="reverse"
                        label="Label on the left"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="community"
                        label="Disabled checked"
                        disabled={true}
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
                        value="light"
                        label="Simple"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="not_light"
                        label="Selected by default"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="ludicrous"
                        label="Custom icon"
                        checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
                        uncheckedIcon={<ActionFavoriteBorder />}
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
            </div>

            <Divider/>


            <p style={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet asperiores aut commodi consequatur doloremque facere fugiat iste, modi numquam odit omnis, placeat praesentium quisquam quod ratione rerum voluptate voluptatibus?
            </p>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />

            </div>

            <p style={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet asperiores aut commodi consequatur doloremque facere fugiat iste, modi numquam odit omnis, placeat praesentium quisquam quod ratione rerum voluptate voluptatibus?
            </p>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />


            </div>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />


            </div>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />


            </div>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />


            </div>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />


            </div>
            <div style={styles.formGroup}>


                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Fixed Floating Label Text"
                    floatingLabelFixed={true}
                />


            </div>

            <Divider/>

            <p style={styles.p}>
                Alerta de Vencimiento
            </p>
            <div style={styles.block}>
                <Toggle
                    label="Notificar al usuario"
                    style={styles.toggle}
                />
                <Toggle
                    label="Notificar al Asesor"
                    style={styles.toggle}
                />
                <Toggle
                    label="Notificar al Reclutador"
                    style={styles.toggle}
                />

            </div>

            <div style={{
                width:'90%',
                display:'flex',
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center',
                marginTop:30,
                padding:30
            }}>
                <RaisedButton
                    label="Guardar"
                />

            </div>






        </Paper>
    );
};

const styles = {
  margenes: {
      maxWidth:645,
      margin:'0 auto',
      marginTop:30,
      textAlign:'left',
      marginBottom: 25
  },
    formGroup: {
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    p: {
      paddingLeft: 25,
        paddingRight:25
    },
    block: {
        maxWidth: 250,
        paddingLeft:25,
        paddingTop:25
    },
};


// PolizaForm.propTypes = {
//     course: React.PropTypes.object.isRequired,
//     allAuthors: React.PropTypes.array,
//     onSave: React.PropTypes.func.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     saving: React.PropTypes.bool,
//     errors: React.PropTypes.object
// };

export default PolizaForm;


{/*<form>*/}
    {/*<h1>Manage Course</h1>*/}
    {/*<TextInput*/}
        {/*name="title"*/}
        {/*label="Title"*/}
        {/*value={course.title}*/}
    {/*/>*/}

    {/*<SelectInput*/}
        {/*name="authorId"*/}
        {/*label="Author"*/}
        {/*value={course.authorId}*/}
        {/*defaultOption="Select Author"*/}
        {/*options={[{value:'pollo',text:'pollo'},{value:'perro',text:'perro'}]}*/}
    {/*/>*/}

    {/*<TextInput*/}
        {/*name="category"*/}
        {/*label="Category"*/}
        {/*value={course.category}*/}
    {/*/>*/}

    {/*<TextInput*/}
        {/*name="length"*/}
        {/*label="Length"*/}
        {/*value={course.length}*/}
    {/*/>*/}

    {/*<input*/}
        {/*type="submit"*/}
        {/*disabled={saving}*/}
        {/*value={saving ? "Saving..." : "Save"}*/}
        {/*className="btn btn-primary"*/}
    {/*/>*/}
{/*</form>*/}