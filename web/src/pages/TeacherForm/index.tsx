import React, { useState, FormEvent } from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

const TeacherForm = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => 
      index === position ? { ...scheduleItem, [field]: value } : scheduleItem
    );
    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(event: FormEvent) {
    event.preventDefault();

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que íncrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(event) => setAvatar(event.target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(event) => setWhatsapp(event.target.value)}
            />
            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(event) => setBio(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Física", label: "Física" },
                { value: "Geográfia", label: "Geográfia" },
                { value: "História", label: "História" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Química", label: "Química" },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora aula"
              value={cost}
              onChange={(event) => {
                setCost(event.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={(event) =>
                      setScheduleItemValue(
                        index,
                        "week_day",
                        event.target.value
                      )
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-Feira" },
                      { value: "2", label: "Terça-Feira" },
                      { value: "3", label: "Quarta-Feira" },
                      { value: "4", label: "Quinta-Feira" },
                      { value: "5", label: "Sexta-Feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(event) =>
                      setScheduleItemValue(index, "from", event.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(event) =>
                      setScheduleItemValue(index, "to", event.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>
        </form>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button" onClick={handleCreateClass}>Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
