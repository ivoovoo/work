import React from "react";
import Item from "./Item";
import BasicTop from "./BasicTop";

const Basic = () => {
  return (
    <div className="quality__basic">
      <h3 className="title">
        Развитие
         <span> основных качеств</span>
      </h3>

      <ul className="quality__basic-list">
        <Item
          text={
            "«Золотая середина» — характер так назван, потому что умеет ладить со всеми остальными характерами. Над более слабым будет корректно доминировать, а под более сильный умело подстраиваться и даже иногда спорить на равных. Однако, часто проявляет себя очень конфликтным, бросающим вызов другим лидерам и обществу."
          }
        >
          <BasicTop num={111} name="Характер, сила воли" />
        </Item>{" "}
        <Item
          text={
            "«Дефицит энергии» — батарейки хватает только на то, чтобы успеть самое необходимое. Большие коллективы, аудитории и шумные тусовки изматывают. Многодневные походы и монотонная работа - туда же. А вот умеренный спорт, фитнес, йога, ну, или, как минимум, прогулки и нормальный сон жизненно необходимы."
          }
        >
          <BasicTop num={2} name="Энергетика, харизма" />
        </Item>{" "}
        <Item
          text={
            "«Нулевой потенциал» — склонности к познанию точных наук, сложных концепций и изобретательству нет. Нет и стабильного интереса к чему-либо подобному. Не беда - значит, ваш путь другой."
          }
        >
          <BasicTop num={"-"} name="Познание, творчество" />
        </Item>{" "}
        <Item
          text={
            "«Низкий запас здоровья» — здоровье слабое и подвергать его лишнему напряжению не стоит. Фитнес, йога, правильное питание, профилактика — лучшие друзья. Делать ставку на внешние данные и красоту такому человеку не стоит. Лучше обратить внимание на другие сильные качества и сфокусироваться на них в поисках себя."
          }
        >
          <BasicTop num={"-"} name="Здоровье, красота" />
        </Item>{" "}
        <Item
          text={
            "«Логика — не ваш конек». Это черта мечтателей, витающих в облаках. Плохо воспринимают длинные цепочки фактов, рассуждений. Могут быть легко запутаны, поэтому постоянно бьются о грабли своих ошибок. Более эмоциональны, нежели рациональны."
          }
        >
          <BasicTop num={"-"} name="Логика, интуиция" />
        </Item>{" "}
        <Item
          text={
            "«Логика — не ваш конек». Это черта мечтателей, витающих в облаках. Плохо воспринимают длинные цепочки фактов, рассуждений. Могут быть легко запутаны, поэтому постоянно бьются о грабли своих ошибок. Более эмоциональны, нежели рациональны."
          }
        >
          <BasicTop num={111} name="Характер, сила воли" />
        </Item>{" "}
        <Item
          text={
            "«По жизни с талисманом» — конечно, одна семерка не гарантирует джекпот в казино с первой ставки, но сбережет от мелких неприятностей и иной раз поможет успеть вскочить на ступеньку уходящего поезда."
          }
        >
          <BasicTop num={7} name="Удача, везение" />
        </Item>{" "}
        <Item
          text={
            "«Чувство долга в меру» — долга перед близкими и друзьями такие люди обычно не избегают. Но не более того. Их инициатива что-то дать окружающим и обществу низка. Но хотя бы не забывают тех, кто рядом. Самопожертвование — это тоже не про них."
          }
        >
          <BasicTop num={8} name="Чувство долга" />
        </Item>
        <Item
          text={
            "«Золотая середина» — характер так назван, потому что умеет ладить со всеми остальными характерами. Над более слабым будет корректно доминировать, а под более сильный умело подстраиваться и даже иногда спорить на равных. Однако, часто проявляет себя очень конфликтным, бросающим вызов другим лидерам и обществу."
          }
        >
          <BasicTop num={99} name="Память, ум" />
        </Item>{" "}
      </ul>
    </div>
  );
};

export default Basic;
