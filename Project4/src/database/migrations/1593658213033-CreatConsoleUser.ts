import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableColumn} from "typeorm";

export class CreatConsoleUser1593658213033 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
			name: 'usersCosole',
			columns: [
				{
					name: 'id',
					type: 'int',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment',
				},
				{
					name: 'idUser',
					type: 'int',
                },
				{
					name: 'idConsole',
                    type: 'int',
				},
			],
        }));

        await queryRunner.createForeignKey("usersCosole", new TableForeignKey({
            columnNames:["idUser"],
            referencedColumnNames: ['id'],
            referencedTableName:"users",
            onDelete:"CASCADE"
        }));

        await queryRunner.createForeignKey("usersCosole", new TableForeignKey({
            columnNames:["idConsole"],
            referencedColumnNames: ['id'],
            referencedTableName:"consoles",
            onDelete:"CASCADE"
        }));
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usersCosole');
    }

}
