import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {

        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },

        addAssignment: (state, {payload: assignment}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                available: assignment.available,
                due: assignment.due,
                points: assignment.points,
                due_date: assignment["due_date"],
                available_from_date: assignment["available_from_date"],
                until_date: assignment["until_date"],
                description: assignment.description,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, {payload: assignment}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        editAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignmentId ? {...a, editing: true} : a
            ) as any;
        },
    },
});

export const {addAssignment,
    deleteAssignment,
    updateAssignment,
    editAssignment,
    setAssignments} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;