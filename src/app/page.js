'use client'
import './login_style_sheet.css'
import './w3s.css'

export function CentralCard({children}){
    return(
        <>
        <div className="card elements-centrelized">
            {children}            
        </div>
        </>
    )
}

export function SiginForm(){
    return(
        <>
            <form className="form elements-centrelized">
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Insira uma Senha'/>
                <input type="password" placeholder='Confirme a Senha'/>
                <button>SigIn</button>
            </form>
        </>
    )
}

export function ToggleButton(){
    return (
    <div className='elements-centrelized'>
    <form onSubmit={(e)=>{
        e.stopPropagation()
        e.preventDefault()
    }}>
    <label className="switch">
    <input type="checkbox" />
    <span className="slider round"></span>
    </label>
    </form>
    <span>Já tem uma conta</span>
    </div>
    )
}

export function LoginForm(){
    return(
        <>
        <form className="form elements-centrelized">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Login</button>
        </form>
        </>
    )
}

export default function Home(){
    return(
        <>
        <div className="main elements-centrelized">
            <h1>Login</h1>
            <CentralCard>
                <SiginForm />
            </CentralCard>
            <ToggleButton/>
            <span className='word'>Esqueceu-se da Senha</span>
        </div>
        </>
    )
}