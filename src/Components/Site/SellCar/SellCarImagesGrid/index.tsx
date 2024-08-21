import React from 'react'
import { closestCenter, DndContext, DragEndEvent, DragOverlay, DragStartEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core'
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import Grid from '../../../Common/Grid'
import SellCarImagesItem from '../SellCarImagesItem'
import { ICarImages } from '../../../../Pages/SellCar'

interface IProps {
    items: ICarImages[]
    handleDragStart: (event: DragStartEvent) => void;
    handleDragEnd: (event: DragEndEvent) => void;
    handleDragCancel: () => void;
    activeId: number;
    activePreviewUrl: string;
    setActivePreviewUrl:(activePreviewUrl: string)=>void;
    handleDeleteCarImage: (id: number) => void;
    handleOpenModal: ()=>void;
}
const SellCarImagesGrid: React.FC<IProps> = ({ items, handleDragStart, handleDeleteCarImage, handleDragEnd, handleDragCancel, activeId, activePreviewUrl, setActivePreviewUrl, handleOpenModal }) => {
    const sensors = useSensors(
        useSensor(MouseSensor, {
            onActivation: (event) => console.log("onActivation", event),
            activationConstraint: { distance: 5 },
        }))


    return (
        <>
            <div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragCancel={handleDragCancel}
            >
                <SortableContext items={items} strategy={rectSortingStrategy}>
                    <Grid columns={3}>
                        {items.map((x, i) => (
                            <div key={i}>
                                <SellCarImagesItem key={x.id} id={x.id} previewUrl={x.previewUrl} handledeletecarimage={handleDeleteCarImage} 
                                setActivePreviewUrl={setActivePreviewUrl}
                                handleopenmodal={()=>handleOpenModal()}
                                />
                            </div>
                        ))}
                    </Grid>
                </SortableContext>
                <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
                    {activeId ? <SellCarImagesItem id={activeId} previewUrl={activePreviewUrl} isDragging  /> : null}
                </DragOverlay>
            </DndContext>
        </div>
        </>
    

    )
}

export default SellCarImagesGrid
