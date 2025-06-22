import React, {useState} from 'react'
import { translate } from '../../translations/translate'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useAccount } from 'wagmi'
import WalletOptions from '../walletoptions/walletoptions'


function SignIn(props) {
    const {lang} = props
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [visible, setVisible] = useState(false)

    const { address, isConnected } = useAccount()

    function handleChange(type, e){
        switch(type) {
            case "user":
                setUser(e.target.value)
                break
            case "pass":
                setPass(e.target.value)
                break
            default:
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        //This is to properly make sure that no matter what happens a user must connect their wallet before signin works
        //Without this one can easily manipulate the frontend by removing disabled from the input and login button.

        if(isConnected) {
            if(typeof props.signSubmit === "function"){
                props.signSubmit({emit: 'signin_send', payload: {user, pass}})
            }

        }

    }

    function handleVisible(){
        setVisible(!visible)
    }


    return <>
            <div className="sign_in_container">
        <Form>
            <Row>
                <Col sm={4} className="label_container d-none d-sm-block">
                    <div className="label">{translate({lang: lang, info: "user"})}</div>
                </Col>
                <Col sm={8} className="input_container">
                    <input placeholder={translate({lang: lang, info: "user"})} className="input_light" type="text" disabled={address ? false : true} value={user} onChange={(e)=>{handleChange('user', e)}}/>
                </Col>
            </Row>
            <Row>
                <Col sm={4} className="label_container d-none d-sm-block">
                    <div className="label">{translate({lang: lang, info: "password"})}</div>
                </Col>
                <Col sm={8} className="input_container">
                    <input placeholder={translate({lang: lang, info: "password"})} className="input_light" type={visible ? "text" : "password"} disabled={address ? false : true} value={pass} onChange={(e)=>{handleChange('pass', e)}}/>
                    <div className="input_eye" onClick={()=>handleVisible()}>
                        {visible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <WalletOptions />
                    <Button type="button" onClick={(e)=>handleSubmit(e)} disabled={address ? false : true} className="mybutton button_fullcolor">
                        {translate({lang: lang, info: "sign_in"})}
                    </Button>
                </Col>
            </Row>
        </Form>
            </div>
            </>
}

export default SignIn