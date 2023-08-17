package com.stackroute.sportsarenadetailsservice.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.sportsarenadetailsservice.dto.request.GroundDto;
import com.stackroute.sportsarenadetailsservice.dto.request.ResponseDto;
import com.stackroute.sportsarenadetailsservice.entities.Ground;
import com.stackroute.sportsarenadetailsservice.exceptions.GlobalExceptionHandler;
import com.stackroute.sportsarenadetailsservice.exceptions.GroundNotFoundException;
import com.stackroute.sportsarenadetailsservice.exceptions.InvalidGroundTypeException;
import com.stackroute.sportsarenadetailsservice.exceptions.InvalidRatingException;
import com.stackroute.sportsarenadetailsservice.services.ArenaDetail.ArenaDetailService;
import com.stackroute.sportsarenadetailsservice.utilities.MapperUtil;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class ControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Mock
    private ArenaDetailService arenaDetailService;

    @InjectMocks
    private ArenaDetailController controller;
    @InjectMocks
    private GlobalExceptionHandler globalExceptionHandler;
    private Ground ground;

    @BeforeEach
    void setup() {
        ground = new Ground();
        ground.setOwnerEmail("pranavmani.naman@gmail.com");
        ground.setGroundType("TENNIS");
        ground.setGroundName("Big ground");
        ground.setStreetName("ABC street");
        ground.setCity("Bangalore");
        ground.setState("Karnataka");
        ground.setCountry("India");
        ground.setOpeningTime("11:00 AM");
        ground.setClosingTime("01:00 PM");
        ground.setAmenities("Big grounds with all the basic amenities");
        ground.setGroundImageUrl("dummy url");
        mockMvc = MockMvcBuilders
                .standaloneSetup(controller)
                .setControllerAdvice(globalExceptionHandler)
                .build();
    }

    @AfterEach
    void tearDown() {
        ground = null;
    }

    @Test
    void addGround() throws Exception {
        when(arenaDetailService.addGround(any())).thenReturn(new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null));
        mockMvc.perform(post("/api/v1/arena/details/add")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isCreated())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).addGround(any());

    }

    @Test
    void updateGround() throws Exception {
        when(arenaDetailService.updateGround(any())).thenReturn(new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null));
        mockMvc.perform(put("/api/v1/arena/details/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).updateGround(any());

    }

    @Test
    void deleteGround() throws Exception {
        when(arenaDetailService.deleteGround(any())).thenReturn(new ResponseDto<>(true, null, null, null));
        mockMvc.perform(delete("/api/v1/arena/details/delete/12345678")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(""))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).deleteGround(any());

    }

    @Test
    void getDetailsById() throws Exception {
        when(arenaDetailService.getGroundById(any())).thenReturn(new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null));
        mockMvc.perform(get("/api/v1/arena/details/123456")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).getGroundById(any());

    }

    @Test
    void groundType() throws Exception {
        when(arenaDetailService.getGroundsByType(any())).thenReturn(any());
        mockMvc.perform(get("/api/v1/arena/details/type/FOOTBALL")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).getGroundsByType(any());

    }

    @Test
    void getByOwnerEmail() throws Exception {
        when(arenaDetailService.getAllGroundOfOwner(any())).thenReturn(any());
        mockMvc.perform(get("/api/v1/arena/details/owner/abc@gmail.com")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(""))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).getAllGroundOfOwner(any());

    }

    @Test
    void updateRating() throws Exception {
        when(arenaDetailService.updateGroundRating(any(), any())).thenReturn(new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null));
        mockMvc.perform(post("/api/v1/arena/details/rating/update/234/5")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(""))
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).updateGroundRating(any(), any());

    }

    @Test
    void groundTypeWithError() throws Exception {
        when(arenaDetailService.getGroundsByType(any())).thenThrow(new InvalidGroundTypeException("Football"));
        mockMvc.perform(get("/api/v1/arena/details/type/FOOTBALL")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(""))
                .andExpect(status().isBadRequest())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).getGroundsByType(any());

    }

    @Test
    void invalidRating() throws Exception {
        when(arenaDetailService.updateGroundRating(any(), any())).thenThrow(new InvalidRatingException(6.0));
        mockMvc.perform(post("/api/v1/arena/details/rating/update/234/5")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(""))
                .andExpect(status().isBadRequest())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).updateGroundRating(any(), any());

    }

    @Test
    void groundNotFoundById() throws Exception {
        when(arenaDetailService.getGroundById(any())).thenThrow(new GroundNotFoundException());
        mockMvc.perform(get("/api/v1/arena/details/123456")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isBadRequest())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).getGroundById(any());

    }

    @Test
    void updateGroundError() throws Exception {
        when(arenaDetailService.updateGround(any())).thenThrow(new GroundNotFoundException());
        mockMvc.perform(put("/api/v1/arena/details/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isBadRequest())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).updateGround(any());

    }

    @Test
    void deleteGroundError() throws Exception {
        when(arenaDetailService.deleteGround(any())).thenThrow(new GroundNotFoundException());
        mockMvc.perform(delete("/api/v1/arena/details/delete/12345678")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(""))
                .andExpect(status().isBadRequest())
                .andDo(MockMvcResultHandlers.print());
        verify(arenaDetailService, times(1)).deleteGround(any());

    }

    @Test
    void updateGroundResponseCheck() throws Exception {
        ResponseDto<GroundDto> dto = new ResponseDto<>(true, null, MapperUtil.groundToGroundDto(ground), null);
        when(arenaDetailService.updateGround(any())).thenReturn(dto);
        MvcResult mvcResult = mockMvc.perform(put("/api/v1/arena/details/update")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonToString(ground)))
                .andExpect(status().isOk())
                .andReturn();
        assertEquals(mvcResult.getResponse().getContentAsString(), jsonToString(dto));
        verify(arenaDetailService, times(1)).updateGround(any());

    }


    private static String jsonToString(final Object ob) throws JsonProcessingException {
        String result;
        try {
            ObjectMapper mapper = new ObjectMapper();
            String jsonContent = mapper.writeValueAsString(ob);
            result = jsonContent;
        } catch (JsonProcessingException e) {
            result = "JSON processing error";
        }

        return result;
    }

}
