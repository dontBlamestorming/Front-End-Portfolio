import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <section id="todoTemplate">
      <div className="container">
        <h2 className="ir_so">투두 영역</h2>
        <div className="title">Todo List</div>
        <div className="content">{children}</div>
        {/* <button
        class="btn btn-default"
        data-target="#layerpop"
        data-toggle="modal"
      >
        모달출력버튼
      </button>
      <br />
      <div class="modal fade" id="layerpop">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                ×
              </button>

              <h4 class="modal-title">Header</h4>
            </div>

            <div class="modal-body">Body</div>

            <div class="modal-footer">
              Footer
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default TodoTemplate;
