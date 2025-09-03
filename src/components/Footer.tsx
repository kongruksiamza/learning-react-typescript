interface FooterProps{
    company:string 
    year:number
}

export default function Footer({company,year}:FooterProps){
    return(
        <>
            <i>บริษัท {company} จำกัด | ปีที่ก่อตั้ง {year}</i>
        </>
    )
}