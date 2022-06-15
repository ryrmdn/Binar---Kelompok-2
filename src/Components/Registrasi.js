import React, {Component} from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default class Registrasi extends Component{
    render(){
        // const {email, password} = this.state
        return(
            <Container>
                <Grid container justify="center">
                    <Grid xs="12" md="8" lg="4">
                        <h2>Halaman Registrasi / Daftar / Sign Up</h2>
                        <form>
                            <TextField type="name" fullWidth margin="dense" variant="outlined" size="small"  name="name" label="Nama" required />
                            <TextField type="numberphone" fullWidth margin="dense" variant="outlined" size="small"  name="numberphone" label="No. Telp" required />
                            <TextField type="address" fullWidth margin="dense" variant="outlined" size="small"  name="address" label="Alamat" required />
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small"  name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small"  name="password" label="Password" required />
                            <TextField type="replaypassword" fullWidth margin="dense" variant="outlined" size="small"  name="replaypassword" label="Konfirmasi Password" required />
                            <Button type="submit" fullWidth variant="contained" color="primary">Registrasi</Button>
                        </form>
                        <p>Sudah punya akun? <Link to="/login">Login</Link></p>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}