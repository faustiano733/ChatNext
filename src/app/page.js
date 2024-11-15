import './styles.css'

export function CentralCard(){
    return(
        <>
        <div>
            <LoginForm />            
        </div>
        </>
    )
}

export function LoginForm(){
    return(
        <>
        <div className="card elements-centrelized">
        <form className="form elements-centrelized">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="PassWord" />
            <button>Login</button>
        </form>
        </div>
        </>
    )
}

export default function Home(){
    return(
        <>
        <div className="main elements-centrelized">
            <h1>Login</h1>
            <CentralCard />
            <span>Forget a PassWord</span>
        </div>
        </>
    )
}