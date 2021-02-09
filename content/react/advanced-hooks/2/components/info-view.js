import {
    PrettyHeader,
    BorderedDiv,
    SmallSpan,
    RoundedImage,
} from "components/pretty-defaults"
import { FaUser, FaUserTimes } from "react-icons/fa"

const TOTALLY_CENTERED = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
}

const Card = ({ children }) => (
    <div style={{ display: "flex", margin: "20px 0px", flexWrap: "nowrap" }}>
        {children}
    </div>
)

const ImageCard = ({ children, style }) => (
    <BorderedDiv
        style={{
            width: "90px",
            height: "90px",
            borderStyle: "dashed",
            ...TOTALLY_CENTERED,
            borderRadius: "20%",
            margin: "5px",
            fontSize: "20px",
            marginBottom: "20px",
            ...style,
        }}
    >
        <span style={{ fontSize: "30px" }}>{children}</span>
    </BorderedDiv>
)

const InfoCard = ({ children, header, style }) => (
    <div style={{ margin: "0px 10px", ...style }}>
        <PrettyHeader Component="span" style={{ fontSize: "30px" }}>
            {header}
        </PrettyHeader>
        <br />
        <SmallSpan>{children}</SmallSpan>
    </div>
)

const InfoView = ({ data }) => {
    const { name, status, species, gender, origin, location, imageUrl, id } = data
    return (
        <Card>
            <RoundedImage
                src={imageUrl}
                alt={name}
                width={100}
                height={100}
                style={{ padding: "5px" }}
            />
            <InfoCard header={name}>
                #{id}, {status}, {species}, {gender}. <br />
                origin: {origin}, <br /> location: {location}
            </InfoCard>
        </Card>
    )
}

const IdleView = () => {
    return (
        <Card>
            <ImageCard>
                <FaUser />
            </ImageCard>
            <InfoCard header={"???"} />
        </Card>
    )
}

const ErrorView = ({ message }) => {
    return (
        <Card>
            <ImageCard style={{ borderColor: "red", color: "red" }}>
                <FaUserTimes />
            </ImageCard>
            <InfoCard header={"xxx"} style={{ color: "red" }}>
                ERROR: {message}
            </InfoCard>
        </Card>
    )
}

export { IdleView, ErrorView }
export default InfoView
