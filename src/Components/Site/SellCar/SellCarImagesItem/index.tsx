import React, { CSSProperties, FC } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DeleteOutlined, ExpandOutlined } from "@ant-design/icons";

interface IProps {
    id: number;
    withOpacity?: boolean;
    isDragging?: boolean;
    previewUrl: string;
    handledeletecarimage?: (id: number) => void;
    setActivePreviewUrl?: (value: string) => void;
    handleopenmodal?: () => void;
}

const SellCarImagesItem: FC<IProps> = (props) => {
    const {
        isDragging,
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });

    const inlineStyles: CSSProperties = {
        opacity: isDragging ? 0.5 : 1,
        transformOrigin: '50% 50%',
        height: '400px',
        width: '400px',
        borderRadius: '10px',
        cursor: isDragging ? 'grabbing' : 'grab',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: isDragging ? 'rgb(63 63 68 / 5%) 0px 2px 0px 2px, rgb(34 33 81 / 15%) 0px 2px 3px 2px' : 'rgb(63 63 68 / 5%) 0px 0px 0px 1px, rgb(34 33 81 / 15%) 0px 1px 3px 0px',
        transform: CSS.Transform.toString(transform),
        transition: transition || undefined,
        marginBottom: 5
    };


    const handleExpandImage = () => {
        props.setActivePreviewUrl && props.setActivePreviewUrl(props.previewUrl)
        props.handleopenmodal && props.handleopenmodal()
    }
    return (
        <>
            <div ref={setNodeRef}
                withOpacity={isDragging}
                {...attributes}
                {...listeners}
                style={inlineStyles}
                {...props}
                id={props.id.toString()}
                onClick={(e) => {
                    if (e.detail === 2) {
                        handleExpandImage()
                    }
                }}
            >
                <img src={props.previewUrl} alt={props.previewUrl} style={{ display: "block", width: "100%", height: "100%" }} />
            </div>
            <DeleteOutlined style={{ color: "red", fontSize: 15, marginRight: 5 }}
                onClick={() => props.handledeletecarimage && props.handledeletecarimage(Number(props.id))} />
            <ExpandOutlined onClick={() => {
                handleExpandImage()
            }} style={{ fontSize: 15 }} />
        </>
    );
};

export default SellCarImagesItem;
