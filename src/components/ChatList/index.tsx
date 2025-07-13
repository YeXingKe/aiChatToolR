import {
    DragDropContext,
    Droppable,
    Draggable,
    type OnDragEndResponder,
  } from "@hello-pangea/dnd";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { RoutePath } from "@/utils/constant";
import styles from "./index.module.scss"
import { useRef } from "react";
import DeleteIcon from "@/assets/icons/delete.svg?react";

interface ChatItemType {
    onClick?: () => void;
    onDelete?: () => void;
    title: string;
    count: number;
    time: string;
    selected: boolean;
    id: string;
    index: number;
    narrow?: boolean;
    // mask: Mask;
}
export function ChatItem(props:ChatItemType){
    const draggableRef = useRef<HTMLDivElement | null>(null);  
    const { pathname: currentPath } = useLocation();  
    return (
        <Draggable draggableId={`${props.id}`} index={props.index}>
             {(provided) => (
                <div 
                    className={clsx(styles["chat-item"], {
                    [styles["chat-item-selected"]]:
                    props.selected &&
                    (currentPath === RoutePath.Chat || currentPath === RoutePath.Home),
                  })}>
                            <>
              <div className={styles["chat-item-title"]}>{props.title}</div>
              <div className={styles["chat-item-info"]}>
                <div className={styles["chat-item-count"]}>
                  10条对话
                </div>
                <div className={styles["chat-item-date"]}>{props.time}</div>
              </div>
            </>
                <div
                    className={styles["chat-item-delete"]}
                    onClickCapture={(e) => {
                    props.onDelete?.();
                    e.preventDefault();
                    e.stopPropagation();
                    }}
                 >
                  <DeleteIcon />
                 </div>
                </div>
             )}
        </Draggable>
    )
}
export function ChatList(props:{narrow?:boolean}){
    const onDragEnd: OnDragEndResponder = (result) => {
        const { destination, source } = result;
        if (!destination) {
          return;
        }
    
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        // moveSession(source.index, destination.index);
      };
    return (
    <DragDropContext onDragEnd={onDragEnd}>
       <Droppable droppableId="chat-list">
       {(provided) => (
          <div
            className={styles["chat-list"]}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((item, i) => (
              <ChatItem
                title={'聊天'}
                time={new Date().toLocaleString()}
                count={0}
                key={i}
                id={i+''}
                index={i}
                selected={i===0}
                onClick={() => {
                //   navigate(Path.Chat);
                //   selectSession(i);
                }}
                onDelete={async () => {
                //   if (
                //     (!props.narrow && !isMobileScreen) ||
                //     (await showConfirm(Locale.Home.DeleteChat))
                //   ) {
                //     chatStore.deleteSession(i);
                //   }
                }}
                narrow={props.narrow}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
       </Droppable>
    </DragDropContext>
    )
}