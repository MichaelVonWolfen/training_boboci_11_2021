export default function (props){
    return (
        <table>
            <tr>
                <th onClick={()=>{
                    if(props.callback)
                        return props.callback(props.header_name[0])
                }}>{props.header_name[0]}</th>
                <th>{props.header_name[1]}</th>
                <th>{props.header_name[2]}</th>
            </tr>
            <tr>
                <td>data1</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
            <tr>
                <td>data1df;lkhnrmkl;whn;rmt;wohjoh;ijt</td>
                <td>data2</td>
                <td>data3</td>
            </tr>
        </table>
    )
}