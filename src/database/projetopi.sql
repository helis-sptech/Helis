create database projetopi;
use projetopi;

create table endereco(
idEndereco int primary key auto_increment,
cep char(8),
numero varchar(5),
logradouro varchar(45),
complemento varchar(45),
bairro varchar(45),
cidade varchar(45)
);

create table empresa(
idEmpresa int primary key auto_increment,
razao varchar (45),
cnpj char(14),
nomeFant varchar (45),
email varchar(60),
telefone char(11),
enderecoId int,
constraint fkEnderecoEmpresa foreign key(enderecoId) references endereco (idEndereco)
);

create table usuario(
idUsuario int primary key auto_increment,
cpf char(11),
nome varchar(45),
email varchar(60),
telefone char(11),
cargo varchar(30),
senha varchar(45),
empresaId int,
constraint fkUsuario foreign key (empresaId) references empresa (idEmpresa)
);

create table veiculo(
idVeiculo int primary key auto_increment,
placa varchar(15),
marca varchar(45),
tipoVeiculo varchar(45),
bau varchar(30),
cor varchar(20),
estado varchar(20),
empresaId int,
foreign key (empresaId) references empresa(idEmpresa)
);

create table cliente(
idCliente int primary key auto_increment,
cpf char(11),
nome varchar(45),
email varchar(60),
telefone char(11),
cidade varchar(45),
uf char(2)
);

create table frete(
idFrete int primary key auto_increment,
veiculoId int,
motoristaId int,
usuarioId int,
docFiscal char(6),
valorFrete decimal(10,2),
peso decimal (6,2),
valorMercadoria decimal(10,2) not null,
statuss varchar(30) not null,
dataCadastro datetime,
dataSaida datetime,
dataEntregaPrevista datetime,
dataEntregaReal datetime,
clienteId int,
enderecoSaidaId int,
enderecoEntrega int,
constraint fkEnderecoSaida foreign key(enderecoSaidaId) references endereco (idEndereco),
constraint fkEnderecoEntrega foreign key(enderecoEntrega) references endereco (idEndereco),
constraint fkCliente foreign key (clienteId) references cliente(idCliente),
constraint fkVeiculo foreign key (veiculoId) references veiculo(idVeiculo),
constraint fkMotorista foreign key (motoristaId) references usuario(idUsuario),
constraint fkRegistrador foreign key (usuarioId) references usuario(idUsuario)
);

create table kmrodado(
freteId int primary key,
kmPercorrido int,
gastoCombustivel decimal(8,2),
manutencao int,
custos int,
constraint fkFreteid foreign key (freteId) references frete(idFrete)
);

create table registros(
idRegistro int primary key auto_increment,
tipo varchar(45),
horario datetime,
mensagem varchar(45),
servico varchar(45)
);