export default function LastPrice() {
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <h1>PETR3</h1>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <h2 style={{color: '#6169d0'}}>R$ 34,90</h2>
                    <div style={{color: '#0acf97'}}>↑ 1,34%</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <small style={{color: '#98a6ad'}}>10/09/2021</small>
                    <small style={{color: '#98a6ad'}}>22:34</small>
                </div>
            </div>

            <div style={{borderLeft: '1px solid #ddd'}}></div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <h1>PETR4</h1>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <h2 style={{color: '#6169d0'}}>R$ 33,88</h2>
                    <div style={{color: '#fa5c7c'}}>↓ 0,34%</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <small style={{color: '#98a6ad'}}>10/09/2021</small>
                    <small style={{color: '#98a6ad'}}>22:34</small>
                </div>
            </div>
        </>
    )
}