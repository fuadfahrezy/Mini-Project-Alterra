import {createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import axios from "axios";

export const getLists = createAsyncThunk("lists/getLists", async() => {
    const response = await axios.get("https://6344d9a639ca915a69f1a747.mockapi.io/v1/lists");
    return response.data;
});

export const AddLists = createAsyncThunk("lists/AddLists", async({namaTempat, negara, alamat, detail}) => {
    const response = await axios.post("https://6344d9a639ca915a69f1a747.mockapi.io/v1/lists", {
        namaTempat,
        negara,
        alamat,
        detail
    });
    return response.data;
});

export const updateLists = createAsyncThunk("lists/updateLists", async({id, namaTempat, negara, alamat, detail}) => {
    const response = await axios.put(`https://6344d9a639ca915a69f1a747.mockapi.io/v1/lists/${id}`, {
        namaTempat,
        negara,
        alamat,
        detail
    });
    return response.data;
});

export const deleteLists = createAsyncThunk("lists/deleteLists", async(id) => {
    const response = await axios.delete(`https://6344d9a639ca915a69f1a747.mockapi.io/v1/lists/${id}`);
    return id;
});

const listEntity = createEntityAdapter({
    selectId: (list) => list.id
});

const listSlice = createSlice({
    name: "list",
    initialState: listEntity.getInitialState(),
    extraReducers:{
        [getLists.fulfilled]: (state, action) => {
            listEntity.setAll(state, action.payload);
        },
        [AddLists.fulfilled]: (state, action) => {
            listEntity.addOne(state, action.payload);
        },
        [updateLists.fulfilled]: (state, action) => {
            listEntity.updateOne(state, {id: action.payload.id, updates: action.payload});
        },
        [deleteLists.fulfilled]: (state, action) => {
            listEntity.removeOne(state, action.payload);
        }
    }
});

export const listSelectors = listEntity.getSelectors(state => state.list);
export default listSlice.reducer